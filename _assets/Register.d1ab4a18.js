import{r as e,K as s,C as a,D as r,d as o,s as l,m as t,L as n,a as i,f as u,g as m,h as c,A as d,F as f,q as p,z as g,x as v,y as w,o as b,j as h,i as x}from"./index.07c17c27.js";var y=o({name:"RegisterPage",setup(){const o=l(null),u=t({username:"",email:"",password:""}),m=l({});return{formRef:o,form:u,register:async()=>{if(!o.value?.checkValidity())return;const l=await async function(o){const l=await e.checkablePost("/users",{user:o}),t=s(l);return t.isOk()?a(t.value.user):r(t.value)}(u);l.isOk()?(n(l.value),await i("global-feed")):m.value=await l.value.getErrors()},errors:m}}});const k={class:"auth-page"},q={class:"container page"},V={class:"row"},L={class:"col-md-6 offset-md-3 col-xs-12"},P=c("h1",{class:"text-xs-center"}," Sign up ",-1),R={class:"text-xs-center"},S=x(" Have an account? "),U={class:"error-messages"},j={class:"form-group"},A={class:"form-group"},E={class:"form-group"};y.render=function(e,s,a,r,o,l){const t=u("AppLink");return b(),m("div",k,[c("div",q,[c("div",V,[c("div",L,[P,c("p",R,[c(t,{name:"login"},{default:d((()=>[S])),_:1})]),c("ul",U,[(b(!0),m(f,null,p(e.errors,((e,s)=>(b(),m("li",{key:s},h(s)+" "+h(e[0]),1)))),128))]),c("form",{ref:"formRef",onSubmit:s[4]||(s[4]=g(((...s)=>e.register(...s)),["prevent"]))},[c("fieldset",j,[v(c("input",{"onUpdate:modelValue":s[1]||(s[1]=s=>e.form.username=s),class:"form-control form-control-lg",type:"text",required:"",placeholder:"Your Name"},null,512),[[w,e.form.username]])]),c("fieldset",A,[v(c("input",{"onUpdate:modelValue":s[2]||(s[2]=s=>e.form.email=s),class:"form-control form-control-lg",type:"email",required:"",placeholder:"Email"},null,512),[[w,e.form.email]])]),c("fieldset",E,[v(c("input",{"onUpdate:modelValue":s[3]||(s[3]=s=>e.form.password=s),class:"form-control form-control-lg",type:"password",minLength:8,required:"",placeholder:"Password"},null,512),[[w,e.form.password]])]),c("button",{type:"submit",class:"btn btn-lg btn-primary pull-xs-right",disabled:!(e.form.email&&e.form.username&&e.form.password)}," Sign up ",8,["disabled"])],544)])])])])};export default y;