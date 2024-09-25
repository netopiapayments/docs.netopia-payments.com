"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[252],{8191:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var s=r(4848),t=r(8453);const o={sidebar_position:4,title:"Sample Response"},a="Verify-auth response example",i={id:"payment-api/v2.x/verify-auth/sample-response",title:"Sample Response",description:"Success ex.",source:"@site/docs/payment-api/v2.x/verify-auth/sample-response.md",sourceDirName:"payment-api/v2.x/verify-auth",slug:"/payment-api/v2.x/verify-auth/sample-response",permalink:"/docs/payment-api/v2.x/verify-auth/sample-response",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Sample Response"},sidebar:"docsSidebar",previous:{title:"Sample Request",permalink:"/docs/payment-api/v2.x/verify-auth/sample-request"},next:{title:"Version 1.x",permalink:"/docs/payment-api/v1.x"}},c={},p=[{value:"Success ex.",id:"success-ex",level:3},{value:"Error ex.",id:"error-ex",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"verify-auth-response-example",children:"Verify-auth response example"})}),"\n",(0,s.jsx)(n.h3,{id:"success-ex",children:"Success ex."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n  "error": {\n    "code": "00",\n    "message": "Approved"\n  },\n  "payment": {\n    "amount": 200,\n    "currency": "RON",\n    "data": {\n      "AuthCode": "HenQ",\n      "BIN": "990000",\n      "ISSUER": "Netopia GB",\n      "ISSUER_COUNTRY": "642",\n      "RRN": "zVfHN8o9gRjn"\n    },\n    "ntpID": "1310396",\n    "status": 3,\n    "token": "MjMyNTotx7IbVyQ+ahEfk3v0ZX03NktTuBhDYQAAGRCoDzWfERrmE477yJnqDCem6RTWE3S1r2L7zNbihsOCA1clluQd"\n  }\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"error-ex",children:"Error ex."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n  "error": {\n    "code": "56",\n    "message": "Order closed"\n  },\n  "payment": {\n    "amount": 200,\n    "currency": "RON",\n    "ntpID": "1310396",\n    "status": 3\n  }\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Please, check ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"../start/start-Error",children:"Errors & Statuses"})})," for get more information about ",(0,s.jsx)(n.strong,{children:"error"})," codes & ",(0,s.jsx)(n.strong,{children:"status"})," codes"]})]})}function l(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>i});var s=r(6540);const t={},o=s.createContext(t);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);