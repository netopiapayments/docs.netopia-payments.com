"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[833],{8683:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"payment-api/v2.x/authorize/authorize-strc","title":"Authorize a payment","description":"Authorize end-point use only for the transactions with 3DS cards.","source":"@site/docs/payment-api/v2.x/authorize/authorize-strc.md","sourceDirName":"payment-api/v2.x/authorize","slug":"/payment-api/v2.x/authorize/authorize-strc","permalink":"/docs/payment-api/v2.x/authorize/authorize-strc","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"docsSidebar","previous":{"title":"Errors & Statuses","permalink":"/docs/payment-api/v2.x/start/start-Error"},"next":{"title":"Query parameters","permalink":"/docs/payment-api/v2.x/authorize/authorize-query-parameters"}}');var o=n(4848),a=n(8453);const s={sidebar_position:1},i="Authorize a payment",c={},h=[{value:"Authorize payment request structure",id:"authorize-payment-request-structure",level:2},{value:"What is paReq?",id:"what-is-pareq",level:2},{value:"What is backUrl?",id:"what-is-backurl",level:2},{value:"How to know if transaction request is with a 3DS card",id:"how-to-know-if-transaction-request-is-with-a-3ds-card",level:2},{value:"How to get &quot;authentication URL&quot; of Card holder Bank",id:"how-to-get-authentication-url-of-card-holder-bank",level:2},{value:"Authorize payment URL for DEMO/Sandbox",id:"authorize-payment-url-for-demosandbox",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"authorize-a-payment",children:"Authorize a payment"})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Authorize"})," end-point use ",(0,o.jsx)(t.strong,{children:"only"})," for the transactions with ",(0,o.jsx)(t.strong,{children:"3DS cards"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["You will need to send a HTTP request via POST method to the Bank ",(0,o.jsx)(t.strong,{children:"(Card holder Bank)"})," to authorize a transaction.\nTo authorize a transaction, request should sent to authentication URL of card holder bank."]}),"\n",(0,o.jsx)(t.h2,{id:"authorize-payment-request-structure",children:"Authorize payment request structure"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:'{\n  "paReq": "string",\n  "backUrl": "string"\n}\n'})}),"\n",(0,o.jsx)(t.h2,{id:"what-is-pareq",children:"What is paReq?"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.strong,{children:"paReq"})," is an unique code per transaction, generated by NETOPIA Payments.\nYou have the ",(0,o.jsx)(t.strong,{children:"paReq"})," token in ",(0,o.jsx)(t.strong,{children:"start end-point response"})]}),"\n",(0,o.jsx)(t.h2,{id:"what-is-backurl",children:"What is backUrl?"}),"\n",(0,o.jsxs)(t.p,{children:["The Card holder Bank will be authorize the transaction and will communicate to your application via ",(0,o.jsx)(t.strong,{children:"backUrl"}),"\nSo practic, the ",(0,o.jsx)(t.strong,{children:"backUrl"})," is a public URL on your application/website who ",(0,o.jsx)(t.strong,{children:"listen"})," to card holder banks."]}),"\n",(0,o.jsxs)(t.p,{children:["The generated token (",(0,o.jsx)(t.strong,{children:"paRes"}),") will be send to your ",(0,o.jsx)(t.strong,{children:"backUrl"})]}),"\n",(0,o.jsx)(t.h2,{id:"how-to-know-if-transaction-request-is-with-a-3ds-card",children:"How to know if transaction request is with a 3DS card"}),"\n",(0,o.jsxs)(t.p,{children:["Ofcourse from response of ",(0,o.jsx)(t.strong,{children:"start end-point"})," we get many usefull information about the payment request.\nOn start end-point response we have ",(0,o.jsx)(t.strong,{children:"customerAction"}),"->",(0,o.jsx)(t.strong,{children:"type"}),". if the value is ",(0,o.jsx)(t.strong,{children:"Authentication3D"})," meanse , this specific transaction need to be authorize to be complited"]}),"\n",(0,o.jsxs)(t.p,{children:["Also, easily we have ",(0,o.jsx)(t.strong,{children:"error code"})," and ",(0,o.jsx)(t.strong,{children:"payment status"}),". Any transaction with 3DS card will have ",(0,o.jsx)(t.strong,{children:"error code 100"})," and ",(0,o.jsx)(t.strong,{children:"payment status 15"})," in start end-point response."]}),"\n",(0,o.jsxs)(t.p,{children:["please, check ",(0,o.jsx)(t.strong,{children:(0,o.jsx)(t.a,{href:"../start/start-Error",children:"Errors & Statuses"})})," for get more information"]}),"\n",(0,o.jsx)(t.h2,{id:"how-to-get-authentication-url-of-card-holder-bank",children:'How to get "authentication URL" of Card holder Bank'}),"\n",(0,o.jsxs)(t.p,{children:["From start end-point response on ",(0,o.jsx)(t.strong,{children:"customerAction"}),"->",(0,o.jsx)(t.strong,{children:"url"})," you can get ",(0,o.jsx)(t.strong,{children:"authentication URL"})," of card holder bank"]}),"\n",(0,o.jsx)(t.h2,{id:"authorize-payment-url-for-demosandbox",children:"Authorize payment URL for DEMO/Sandbox"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"https://secure.sandbox.netopia-payments.com/sandbox/authorize\n"})})]})}function l(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>i});var r=n(6540);const o={},a=r.createContext(o);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);