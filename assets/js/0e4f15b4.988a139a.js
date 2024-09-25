"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[5084],{7572:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=n(4848),i=n(8453);const a={sidebar_position:1,title:"Verify payment"},s="Verify a payment",o={id:"payment-api/v2.x/verify-auth/verify-auth-strc",title:"Verify payment",description:"Verify-auth end-point also use only for the transactions with 3DS cards and after you have authorize end-point response.",source:"@site/docs/payment-api/v2.x/verify-auth/verify-auth-strc.md",sourceDirName:"payment-api/v2.x/verify-auth",slug:"/payment-api/v2.x/verify-auth/verify-auth-strc",permalink:"/docs/payment-api/v2.x/verify-auth/verify-auth-strc",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Verify payment"},sidebar:"docsSidebar",previous:{title:"Authorize response",permalink:"/docs/payment-api/v2.x/authorize/authorize-response"},next:{title:"Query parameters",permalink:"/docs/payment-api/v2.x/verify-auth/verify-auth-query-parameters"}},h={},c=[{value:"verify-auth payment URL",id:"verify-auth-payment-url",level:2},{value:"verify-auth payment request structure",id:"verify-auth-payment-request-structure",level:2},{value:"What is authenticationToken &amp; how to get it?",id:"what-is-authenticationtoken--how-to-get-it",level:2},{value:"What is ntpID &amp; how to get it?",id:"what-is-ntpid--how-to-get-it",level:2}];function p(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"verify-a-payment",children:"Verify a payment"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Verify-auth"})," end-point also use ",(0,r.jsx)(t.strong,{children:"only"})," for the transactions with ",(0,r.jsx)(t.strong,{children:"3DS cards"})," and after you have ",(0,r.jsx)(t.strong,{children:"authorize end-point"})," response."]}),"\n",(0,r.jsxs)(t.p,{children:["In Order to complete a transaction process you need to verify the ",(0,r.jsx)(t.strong,{children:"paRes token"})," and ",(0,r.jsx)(t.strong,{children:"ntpID"})]}),"\n",(0,r.jsx)(t.h2,{id:"verify-auth-payment-url",children:"verify-auth payment URL"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"https://secure.sandbox.netopia-payments.com/payment/card/verify-auth\n"})}),"\n",(0,r.jsx)(t.h2,{id:"verify-auth-payment-request-structure",children:"verify-auth payment request structure"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'{\n  "authenticationToken": "string",\n  "ntpID": "string",\n  "formData": {\n    "paRes": "string"\n  }\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"what-is-authenticationtoken--how-to-get-it",children:"What is authenticationToken & how to get it?"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.strong,{children:"authenticationToken"})," in an unique token for ",(0,r.jsx)(t.strong,{children:"authentication"})," per transaction, generated by NETOPIA Payments.\nYou have the ",(0,r.jsx)(t.strong,{children:"authenticationToken"})," from start end-point response"]}),"\n",(0,r.jsx)(t.h2,{id:"what-is-ntpid--how-to-get-it",children:"What is ntpID & how to get it?"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.strong,{children:"ntpID"})," in an unique code per transaction generated by NETOPIA Payments.\nYou have the ",(0,r.jsx)(t.strong,{children:"ntpID"})," from start end-point response"]})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var r=n(6540);const i={},a=r.createContext(i);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);