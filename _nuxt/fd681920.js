import{R as o}from"./b3828e5d.js";import"./570e55ad.js";import"../sb-preview/runtime.js";import"./cc957f59.js";import"./02182706.js";import"./356e4a49.js";const e={},m=o.createContext(e);function c(t){const n=o.useContext(m);return o.useMemo(function(){return typeof t=="function"?t(n):{...n,...t}},[n,t])}function l(t){let n;return t.disableParentContext?n=typeof t.components=="function"?t.components(e):t.components||e:n=c(t.components),o.createElement(m.Provider,{value:n},t.children)}export{l as MDXProvider,c as useMDXComponents};