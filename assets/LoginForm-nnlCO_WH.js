import{_ as x,r,a as d,b as e,g as v,v as _,t as b,h as p,i as k,e as w,j as I,o as c,p as V,f as S}from"./index-xPpT8wh_.js";const m=i=>(V("data-v-640e6222"),i=i(),S(),i),B=m(()=>e("label",{for:"email"},"Email:",-1)),C={key:0,class:"error"},E={key:1,class:"error"},F=m(()=>e("label",{for:"password",class:"m-5"},"Password:",-1)),L={key:0,class:"error"},M=m(()=>e("button",{type:"submit",class:"btn m-3 bg-success btn-block bold"},"Login",-1)),P=m(()=>e("span",null,[w("Forgot"),e("a",{style:{"margin-left":"5px"},href:"#"},"password")],-1)),N={__name:"LoginForm",setup(i){const s=r(""),o=r(""),n=r(!1),u=r(!0),a=r({}),f=()=>{/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s.value)?(a.value.email="",u.value=!0):(a.value.email="Invalid email format",u.value=!1)},g=()=>{f(),o.value.trim()?a.value.password="":a.value.password="Password is required",u.value&&!a.value.password&&(alert("Login..."),console.log("Form submitted successfully!"),s.value="",o.value="",n.value=!1)},h=()=>{s.value="",o.value="",n.value=!1,a.value.email="",a.value.password=""};return(y,l)=>(c(),d("form",{onSubmit:I(g,["prevent"]),method:"post",autocomplete:"on"},[e("div",null,[B,v(e("input",{id:"email",type:"email",class:"form-control","onUpdate:modelValue":l[0]||(l[0]=t=>s.value=t),onInput:f},null,544),[[_,s.value]]),a.value.email?(c(),d("div",C,b(a.value.email),1)):p("",!0),s.value&&!u.value?(c(),d("div",E,"Invalid email format")):p("",!0)]),e("div",null,[F,v(e("input",{type:"password",class:"form-control","onUpdate:modelValue":l[1]||(l[1]=t=>o.value=t)},null,512),[[_,o.value]]),a.value.password?(c(),d("div",L,b(a.value.password),1)):p("",!0)]),e("div",null,[e("label",null,[v(e("input",{style:{"margin-right":"10px"},type:"checkbox","onUpdate:modelValue":l[2]||(l[2]=t=>n.value=t)},null,512),[[k,n.value]]),w("Remember me ")])]),M,e("div",{class:"clearfix"},[e("button",{class:"resetBtn",type:"reset",onClick:h},"Cancel"),P])],32))}},D=x(N,[["__scopeId","data-v-640e6222"]]);export{D as default};