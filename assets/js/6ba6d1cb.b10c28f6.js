"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[252],{5335:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"payment-api/v2.x/verify-auth/sample-response","title":"Sample Response","description":"Success ex.","source":"@site/docs/payment-api/v2.x/verify-auth/sample-response.md","sourceDirName":"payment-api/v2.x/verify-auth","slug":"/payment-api/v2.x/verify-auth/sample-response","permalink":"/docs/payment-api/v2.x/verify-auth/sample-response","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4,"title":"Sample Response"},"sidebar":"docsSidebar","previous":{"title":"Sample Request","permalink":"/docs/payment-api/v2.x/verify-auth/sample-request"},"next":{"title":"Version 1.x","permalink":"/docs/payment-api/v1.x"}}');var t=r(4848),o=r(8453);const a={sidebar_position:4,title:"Sample Response"},i="Verify-auth response example",c={},p=[{value:"Success ex.",id:"success-ex",level:3},{value:"Error ex.",id:"error-ex",level:3}];function l(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"verify-auth-response-example",children:"Verify-auth response example"})}),"\n",(0,t.jsx)(n.h3,{id:"success-ex",children:"Success ex."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'{\n  "error": {\n    "code": "00",\n    "message": "Approved"\n  },\n  "payment": {\n    "amount": 200,\n    "currency": "RON",\n    "data": {\n      "AuthCode": "HenQ",\n      "BIN": "990000",\n      "ISSUER": "Netopia GB",\n      "ISSUER_COUNTRY": "642",\n      "RRN": "zVfHN8o9gRjn"\n    },\n    "ntpID": "1310396",\n    "status": 3,\n    "token": "MjMyNTotx7IbVyQ+ahEfk3v0ZX03NktTuBhDYQAAGRCoDzWfERrmE477yJnqDCem6RTWE3S1r2L7zNbihsOCA1clluQd"\n  }\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"error-ex",children:"Error ex."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'{\n  "error": {\n    "code": "56",\n    "message": "Order closed"\n  },\n  "payment": {\n    "amount": 200,\n    "currency": "RON",\n    "ntpID": "1310396",\n    "status": 3\n  }\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Please, check ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"../start/start-Error",children:"Errors & Statuses"})})," for get more information about ",(0,t.jsx)(n.strong,{children:"error"})," codes & ",(0,t.jsx)(n.strong,{children:"status"})," codes"]})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>i});var s=r(6540);const t={},o=s.createContext(t);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);