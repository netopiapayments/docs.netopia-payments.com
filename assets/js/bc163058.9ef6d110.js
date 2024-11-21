"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[6161],{6469:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"payment-sdks/nodejs","title":"NodeJS SDK","description":"Proof of concept - NETOPIA integration in Node.js","source":"@site/docs/payment-sdks/nodejs.md","sourceDirName":"payment-sdks","slug":"/payment-sdks/nodejs","permalink":"/docs/payment-sdks/nodejs","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"title":"NodeJS SDK"},"sidebar":"docsSidebar","previous":{"title":"PHP SDK","permalink":"/docs/payment-sdks/php"},"next":{"title":"Python SDK","permalink":"/docs/payment-sdks/python"}}');var r=t(4848),i=t(8453);const o={sidebar_position:2,title:"NodeJS SDK"},d="NodeJS SDK",a={},l=[{value:"Card Payment Module in nodejs",id:"card-payment-module-in-nodejs",level:2},{value:"Where to send the Request",id:"where-to-send-the-request",level:2},{value:"Payment Request Structure",id:"payment-request-structure",level:2},{value:"Requiered fields",id:"requiered-fields",level:3},{value:"Confirm URL",id:"confirm-url",level:3},{value:"Redirect URL",id:"redirect-url",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"nodejs-sdk",children:"NodeJS SDK"})}),"\n",(0,r.jsx)(n.p,{children:"Proof of concept - NETOPIA integration in Node.js"}),"\n",(0,r.jsx)(n.h2,{id:"card-payment-module-in-nodejs",children:"Card Payment Module in nodejs"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://github.com/mobilpay/Node.js",children:"This module"})," made to use as an example of implementation for online payment via Card"]}),"\n",(0,r.jsx)(n.h2,{id:"where-to-send-the-request",children:"Where to send the Request"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Live : ",(0,r.jsx)(n.a,{href:"https://secure.mobilpay.ro",children:"https://secure.mobilpay.ro"})]}),"\n",(0,r.jsxs)(n.li,{children:["Sandbox : ",(0,r.jsx)(n.a,{href:"https://sandboxsecure.mobilpay.ro",children:"https://sandboxsecure.mobilpay.ro"}),"\n(only HTTP POST requests accepted)"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"payment-request-structure",children:"Payment Request Structure"}),"\n",(0,r.jsxs)(n.p,{children:["In order to send the payment request to NETOPIA Payments , you need to encrypt the payment data on ",(0,r.jsx)(n.strong,{children:"POST"})," method and encapsulate the information using the following structure."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:'const data = {\n  order: {\n    $: {\n      id: orderId,\n      timestamp: date.getTime(),\n      type: "card",\n    },\n    signature: "<your_netopia_seller_account_signature>",\n    url: {\n      return: "<your_return_URL>",\n      confirm: "<your_confirm_URL>",\n    },\n    invoice: {\n      $: {\n        currency: currency,\n        amount: amount,\n      },\n      details: "test plata",\n      contact_info: {\n        billing: {\n          $: {\n            type: "person",\n          },\n          first_name: "Test",\n          last_name: "Test",\n          address: "strada",\n          email: "test@mobilpay.ro",\n          mobile_phone: "mobilePhone",\n        },\n        shipping: {\n          $: {\n            type: "person",\n          },\n          first_name: "Test",\n          last_name: "Test",\n          address: "strada",\n          email: "test@mobilpay.ro",\n          mobile_phone: "mobilePhone",\n        },\n      },\n    },\n    ipn_cipher: "aes-256-cbc",\n  },\n};\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.h3,{id:"requiered-fields",children:"Requiered fields"}),"\n",(0,r.jsxs)(n.p,{children:["All the fields are requiered, except ",(0,r.jsx)(n.code,{children:"shipping"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.h3,{id:"confirm-url",children:"Confirm URL"}),"\n",(0,r.jsx)(n.p,{children:"The confirm URL will be used for IPN (Instant Payment Notification) - i.e. to send information about the transaction's status."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.h3,{id:"redirect-url",children:"Redirect URL"}),"\n",(0,r.jsx)(n.p,{children:"The redirect URL will be used to redirect User/Customer back to the Merchant's website from NETOPIA Payments (from the payment page, after the payment is done)"}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>d});var s=t(6540);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);