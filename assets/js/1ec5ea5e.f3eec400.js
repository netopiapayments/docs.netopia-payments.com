"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[3197],{4035:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>i});var s=t(4848),r=t(8453);const o={sidebar_position:3,title:"Sample Response"},a="Start response example",p={id:"payment-api/start/sample-response",title:"Sample Response",description:"Example of start payment response",source:"@site/docs/payment-api/start/sample-response.md",sourceDirName:"payment-api/start",slug:"/payment-api/start/sample-response",permalink:"/docs/payment-api/start/sample-response",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Sample Response"},sidebar:"docsSidebar",previous:{title:"Sample Request",permalink:"/docs/payment-api/start/sample-request"},next:{title:"Errors & Statuses",permalink:"/docs/payment-api/start/start-Error"}},c={},i=[{value:"Example of start payment response",id:"example-of-start-payment-response",level:2},{value:"Success ex.",id:"success-ex",level:3},{value:"Error ex.",id:"error-ex",level:3}];function l(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"start-response-example",children:"Start response example"}),"\n",(0,s.jsx)(n.h2,{id:"example-of-start-payment-response",children:"Example of start payment response"}),"\n",(0,s.jsx)(n.h3,{id:"success-ex",children:"Success ex."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n  "customerAction": {},\n  "error": {\n    "code": "00",\n    "message": "Approved"\n  },\n  "payment": {\n    "amount": 200,\n    "currency": "RON",\n    "data": {\n      "AuthCode": "24od",\n      "BIN": "990000",\n      "ISSUER": "Netopia GB",\n      "ISSUER_COUNTRY": "642",\n      "RRN": "hYnY8zpdcNo-"\n    },\n    "ntpID": "1309088",\n    "status": 3,\n    "token": "MjMyMjqqdx3XTbYC78OoidTk6DTtEvHcrqcz91Pr4PQqXf/u33xoDkdgIlkq226avk1ik8fvLElkbLopnvNbIs8+Ve6L"\n  }\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["or for ",(0,s.jsx)(n.strong,{children:"3DS Card"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n  "customerAction": {\n    "authenticationToken": "iNPqJWDRoRXsd77StNELrvBiGr_ihsLdvikrsTiYqprMh9ViBO-lq_i38YsmxT-JTZPqf04uS4dBhCAQjNSxcAyZcVAcGhCH3r7knN-KePOzno16psy5O_OvzfRlbuvkrBtrpjcXyzcTi--M6uM-X1C7aBzVgPa1",\n    "formData": {\n      "backUrl": "http://yourdomain.com/example/backUrl.php",\n      "paReq": "AT5ewtLVDsEgB5lcRjeEoSMF6RZ4A3sPWhsU3IiSy8X0XdrQ49D7b-oUMYnwslzZ436FCQv6aB4m7Sn1QNqYzZU="\n    },\n    "type": "Authentication3D",\n    "url": "https://secure.sandbox.netopia-payments.com/sandbox/authorize"\n  },\n  "error": {\n    "code": "100",\n    "message": "Approved"\n  },\n  "payment": {\n    "amount": 200,\n    "currency": "RON",\n    "ntpID": "1310396",\n    "status": 15\n  }\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"error-ex",children:"Error ex."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n  "customerAction": {},\n  "error": {\n    "code": "56",\n    "message": "Order closed"\n  },\n  "payment": {\n    "amount": 200,\n    "currency": "RON",\n    "ntpID": "1309088",\n    "status": 5\n  }\n}\n'})})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>p});var s=t(6540);const r={},o=s.createContext(r);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function p(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);