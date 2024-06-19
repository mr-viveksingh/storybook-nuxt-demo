import{o as a,b as _,B as s,f as d,M,A as b,N,d as B,z as c,e as P,O as $,P as z,t as L}from"./18e26a01.js";import{_ as k}from"./c27b6911.js";import{_ as v}from"./e329ee3c.js";/* empty css        */import"./f9afcc2e.js";import"./0f1d1c6c.js";import"./507e075a.js";const E={},H=d("h1",null," hello ",-1);function V(r,n){return a(),_("pre",null,[s("        "),H,s(`
        Hello World
    `)])}const O=k(E,[["render",V]]),T={};function w(r,n){const o=v;return a(),M(o,{to:"https://nuxt.com"},{default:b(()=>[N(r.$slots,"default")]),_:3})}const A=k(T,[["render",w]]),D={class:"storybook sb-column"},W=d("h4",null," NuxtLink ",-1),j=B({__name:"MyButton",props:{label:{},primary:{type:Boolean,default:!1},size:{},backgroundColor:{},union:{type:[String,Number,Boolean]}},emits:["click"],setup(r,{emit:n}){const o=r,f=n,g=c(()=>({"storybook-button":!0,"storybook-button--primary":o.primary,"storybook-button--secondary":!o.primary,[`storybook-button--${o.size||"medium"}`]:!0})),x=c(()=>({backgroundColor:o.backgroundColor})),h=()=>{f("click",1)};return(S,F)=>{const C=A;return a(),_("div",D,[W,P(C,{class:$(g.value),onClick:h,style:z(x.value)},{default:b(()=>[s(L(S.label),1)]),_:1},8,["class","style"])])}}}),q=[],X={title:"Example/NuxtLink Story",component:j,tags:["autodocs"],argTypes:{backgroundColor:{control:"color"},onClick:{action:"clicked"}},args:{primary:!1},decorators:q},e={args:{primary:!0,label:"Primary"}},t={args:{primary:!0,label:"My Story"},render:r=>({components:{MyPre:O},template:"<my-pre>  Hii</my-pre>"})};var l,m,i;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: 'Primary'
  }
}`,...(i=(m=e.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};var p,u,y;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: 'My Story'
  },
  render: args => ({
    components: {
      MyPre
    },
    template: \`<my-pre>  Hii</my-pre>\`
  })
}`,...(y=(u=t.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};const Y=["Primary","MyStory"];export{t as MyStory,e as Primary,Y as __namedExportsOrder,X as default};
