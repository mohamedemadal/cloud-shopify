import{m as h,q as x,f as t,u as g,y as k,r as u,o as V,c as E,a as e,b as l,s as c,w as C,e as j,t as _,z as I}from"./index-72c80999.js";const q=["onSubmit"],z={class:"card flex justify-content-center py-6"},B={class:"p-float-label w-full"},N=e("label",{style:{"font-size":"16px"},for:"username"},"Email",-1),S={class:"card flex justify-content-center py-6"},T={class:"p-float-label w-full"},U=e("label",{style:{"font-size":"16px"},for:"username"},"password",-1),F={class:"auth-layout__options flex items-center justify-between"},L={class:"flex justify-center mt-4"},P=h({__name:"Login",setup(R){const{t:a}=x(),n=t(""),r=t(""),d=t(!1),i=t([]),m=t([]),v=g(),b=k(()=>!i.value.length&&!m.value.length);function p(){b.value&&(i.value=n.value?[]:["Email is required"],m.value=r.value?[]:["Password is required"],v.push({name:"dashboard"}))}return(D,o)=>{const f=u("InputText"),w=u("va-checkbox"),y=u("router-link");return V(),E("form",{onSubmit:I(p,["prevent"])},[e("div",z,[e("span",B,[l(f,{type:"email",style:{"background-color":"#ecf0f1"},id:"username",class:"w-full",modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=s=>n.value=s)},null,8,["modelValue"]),N])]),e("div",S,[e("span",T,[l(f,{style:{"background-color":"#ecf0f1"},type:"password",id:"username",class:"w-full bg-[#ECF0F1]",modelValue:r.value,"onUpdate:modelValue":o[1]||(o[1]=s=>r.value=s)},null,8,["modelValue"]),U])]),e("div",F,[l(w,{modelValue:d.value,"onUpdate:modelValue":o[2]||(o[2]=s=>d.value=s),class:"mb-0",label:c(a)("auth.keep_logged_in")},null,8,["modelValue","label"]),l(y,{class:"ml-1 va-link",to:{name:"recover-password"}},{default:C(()=>[j(_(c(a)("auth.recover_password")),1)]),_:1})]),e("div",L,[e("button",{style:{"background-color":"#448aeb !important","border-radius":"10px",color:"white"},class:"w-full lg:w-[50%] py-2 text-lg",onClick:p},_(c(a)("auth.login")),1)])],40,q)}}});export{P as default};
