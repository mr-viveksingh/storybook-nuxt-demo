import"../sb-preview/runtime.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(r){if(r.ep)return;r.ep=!0;const t=s(r);fetch(r.href,t)}})();const O="modulepreload",p=function(e,o){return e[0]==="."?new URL(e,o).href:e},m={},d=function(o,s,a){if(!s||s.length===0)return o();const r=document.getElementsByTagName("link");return Promise.all(s.map(t=>{if(t=p(t,a),t in m)return;m[t]=!0;const i=t.endsWith(".css"),E=i?'[rel="stylesheet"]':"";if(!!a)for(let c=r.length-1;c>=0;c--){const l=r[c];if(l.href===t&&(!i||l.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${t}"]${E}`))return;const n=document.createElement("link");if(n.rel=i?"stylesheet":O,i||(n.as="script",n.crossOrigin=""),n.href=t,document.head.appendChild(n),i)return new Promise((c,l)=>{n.addEventListener("load",c),n.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${t}`)))})})).then(()=>o()).catch(t=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=t,window.dispatchEvent(i),!i.defaultPrevented)throw t})},_=(...e)=>d(...e).catch(o=>{const s=new Event("nuxt.preloadError");throw s.payload=o,window.dispatchEvent(s),o}),{createBrowserChannel:f}=__STORYBOOK_MODULE_CHANNELS__,{addons:R}=__STORYBOOK_MODULE_PREVIEW_API__,u=f({page:"preview"});R.setChannel(u);window.__STORYBOOK_ADDONS_CHANNEL__=u;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=u);const T={"./stories/MyNuxtWelcome.stories.ts":async()=>_(()=>import("./f772f33b.js"),["./f772f33b.js","./8cec97b3.js","./18e26a01.js","./696fd585.js","./c27b6911.js","./welcome.ddde0a2d.css","./e0e574bd.js","./507e075a.js"],import.meta.url),"./stories/NuxtButton.stories.ts":async()=>_(()=>import("./0512d2d5.js"),["./0512d2d5.js","./18e26a01.js","./c27b6911.js","./e329ee3c.js","./f9afcc2e.js","./0f1d1c6c.js","./507e075a.js","./button.f973a2ca.css"],import.meta.url),"./stories/NuxtImage.stories.ts":async()=>_(()=>import("./2c61689f.js"),["./2c61689f.js","./18e26a01.js","./696fd585.js","./507e075a.js","./7738886a.js","./0f1d1c6c.js","./c27b6911.js"],import.meta.url),"./stories/Pinia.stories.ts":async()=>_(()=>import("./7641ada2.js"),["./7641ada2.js","./b8712dce.js","./e329ee3c.js","./18e26a01.js","./f9afcc2e.js","./0f1d1c6c.js","./507e075a.js","./9773789e.js","./c27b6911.js","./index.cae31aa3.css","./button.f973a2ca.css"],import.meta.url),"./stories/RuntimeComposable.stories.ts":async()=>_(()=>import("./b236fe3c.js"),["./b236fe3c.js","./e0e574bd.js","./507e075a.js","./18e26a01.js"],import.meta.url)};async function L(e){return T[e]()}const{composeConfigs:I,PreviewWeb:P,ClientApi:S}=__STORYBOOK_MODULE_PREVIEW_API__,y=async(e=[])=>{const o=await Promise.all([e.at(0)??_(()=>import("./c70e2572.js"),["./c70e2572.js","./18e26a01.js"],import.meta.url),e.at(1)??_(()=>import("./5538e4c4.js"),["./5538e4c4.js","./cc957f59.js","./18e26a01.js"],import.meta.url),e.at(2)??_(()=>import("./0ce960d7.js"),[],import.meta.url),e.at(3)??_(()=>import("./1f1142e8.js"),["./1f1142e8.js","./02182706.js"],import.meta.url),e.at(4)??_(()=>import("./143e0169.js"),[],import.meta.url),e.at(5)??_(()=>import("./76c1789d.js"),[],import.meta.url),e.at(6)??_(()=>import("./0db27864.js"),["./0db27864.js","./356e4a49.js"],import.meta.url),e.at(7)??_(()=>import("./73c648b3.js"),[],import.meta.url),e.at(8)??_(()=>import("./c56bf6ac.js"),[],import.meta.url),e.at(9)??_(()=>import("./ccb21904.js"),["./ccb21904.js","./356e4a49.js"],import.meta.url),e.at(10)??_(()=>import("./0ef86afd.js"),[],import.meta.url),e.at(11)??_(()=>import("./6382de40.js"),[],import.meta.url),e.at(12)??_(()=>import("./1e5c59db.js"),[],import.meta.url)]);return I(o)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new P(L,y);window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;export{_};
