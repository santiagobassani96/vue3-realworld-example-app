let t=document.createElement("style");t.innerHTML="",document.head.appendChild(t);import{e,d as a,f as l,m as s,n as o,z as r,s as i,h as n,c,a as d,A as u,B as m,C as p,D as f,F as g,x as b,o as y,b as v,t as h}from"./index.8643d939.js";import{g as T}from"./getArticle.c2a67854.js";var w=a({name:"EditArticle",setup(){const t=i(),a=n(),c=l(()=>t.params.slug),d=s({title:"",description:"",body:"",tagList:[]}),u=o("");r(()=>{c.value&&async function(t){const e=await T(t);d.title=e.title,d.description=e.description,d.body=e.body,d.tagList=e.tagList}(c.value)});return{form:d,onSubmit:async()=>{let t;return t=c.value?await async function(t,a){return e.put("/articles/"+t,{article:a}).then(t=>t.article)}(c.value,d):await async function(t){return e.post("/articles",{article:t}).then(t=>t.article)}(d),a.push({name:"article",params:{slug:t.slug}})},newTag:u,addTag:()=>{d.tagList.push(u.value.trim()),u.value=""},removeTag:t=>{d.tagList=d.tagList.filter(e=>e!==t)}}}});const x={class:"editor-page"},L={class:"container page"},A={class:"row"},C={class:"col-md-10 offset-md-1 col-xs-12"},k={class:"form-group"},E={class:"form-group"},U={class:"form-group"},V={class:"form-group"},S={class:"tag-list"};w.render=function(t,e,a,l,s,o){return y(),c("div",x,[d("div",L,[d("div",A,[d("div",C,[d("form",{onSubmit:e[7]||(e[7]=u((...e)=>t.onSubmit(...e),["prevent"]))},[d("fieldset",k,[m(d("input",{"onUpdate:modelValue":e[1]||(e[1]=e=>t.form.title=e),type:"text",class:"form-control form-control-lg",placeholder:"Article Title"},null,512),[[p,t.form.title]])]),d("fieldset",E,[m(d("input",{"onUpdate:modelValue":e[2]||(e[2]=e=>t.form.description=e),type:"text",class:"form-control form-control-lg",placeholder:"What's this article about?"},null,512),[[p,t.form.description]])]),d("fieldset",U,[m(d("textarea",{"onUpdate:modelValue":e[3]||(e[3]=e=>t.form.body=e),rows:8,class:"form-control",placeholder:"Write your article (in markdown)"},null,512),[[p,t.form.body]])]),d("fieldset",V,[m(d("input",{"onUpdate:modelValue":e[4]||(e[4]=e=>t.newTag=e),type:"text",class:"form-control",placeholder:"Enter tags",onChange:e[5]||(e[5]=(...e)=>t.addTag(...e)),onKeypress:e[6]||(e[6]=f(u((...e)=>t.addTag(...e),["prevent"]),["enter"]))},null,544),[[p,t.newTag]]),d("div",S,[(y(!0),c(g,null,b(t.form.tagList,e=>(y(),c("span",{key:e,class:"tag-default tag-pill"},[d("i",{class:"ion-close-round",onClick:a=>t.removeTag(e)},null,8,["onClick"]),v(" "+h(e),1)]))),128))])]),d("button",{class:"btn btn-lg pull-xs-right btn-primary",type:"submit",disabled:!(t.form.title&&t.form.description&&t.form.body)}," Publish Article ",8,["disabled"])],32)])])])])},w.__file="src/pages/EditArticle.vue";export default w;