"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[1637],{6301:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var t=r(4848),s=r(8453);const i={sidebar_position:5,title:"API Integration"},a="NETOPIA Payments API",o={id:"get-started/technical-implementation",title:"API Integration",description:"Card Payment Module in PHP language",source:"@site/docs/get-started/technical-implementation.md",sourceDirName:"get-started",slug:"/get-started/technical-implementation",permalink:"/docs/get-started/technical-implementation",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"API Integration"},sidebar:"docsSidebar",previous:{title:"KYB",permalink:"/docs/get-started/kyb"},next:{title:"API Usage",permalink:"/docs/get-started/api-usage"}},l={},d=[{value:"Card Payment Module in PHP language",id:"card-payment-module-in-php-language",level:2},{value:"Generic Payment Request/Response Flow",id:"generic-payment-requestresponse-flow",level:2},{value:"Payment request",id:"payment-request",level:3},{value:"Requirements",id:"requirements",level:2},{value:"Where to send the Request",id:"where-to-send-the-request",level:2},{value:"Payment Request Structure",id:"payment-request-structure",level:2},{value:"Confirm URL",id:"confirm-url",level:3},{value:"Redirect URL",id:"redirect-url",level:3},{value:"Payment Response Structure",id:"payment-response-structure",level:2},{value:"Merchant&#39;s Response",id:"merchants-response",level:2},{value:"error_type",id:"error_type",level:3},{value:"error_code",id:"error_code",level:3},{value:"message",id:"message",level:3},{value:"Security",id:"security",level:2},{value:"APPENDIX",id:"appendix",level:3},{value:"Error Code Values",id:"error-code-values",level:4}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"netopia-payments-api",children:"NETOPIA Payments API"}),"\n",(0,t.jsx)(n.h2,{id:"card-payment-module-in-php-language",children:"Card Payment Module in PHP language"}),"\n",(0,t.jsx)(n.p,{children:"This module made to use as an example of implementation for online payment via Card in PHP"}),"\n",(0,t.jsx)(n.h2,{id:"generic-payment-requestresponse-flow",children:"Generic Payment Request/Response Flow"}),"\n",(0,t.jsx)(n.p,{children:"The user will be redirected from the Merchant's website to NETOPIA Payments server together with a payment request. Based on the merchant account settings in NETOPIA's platform, various payment input methods might be displayed (e.g. Google Pay)"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.h3,{id:"payment-request",children:"Payment request"}),"\n","You need to send Payment request to NETOPIA Payments by using ",(0,t.jsx)(n.strong,{children:"POST Method"})," including 2 variable ",(0,t.jsx)(n.strong,{children:"env_key"})," and ",(0,t.jsx)(n.strong,{children:"data"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"env_key : envelope key\npayment encryption"}),"\n",(0,t.jsx)(n.li,{children:"data : encrypted data\n(see the openssl_seal function in PHP)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"PHP 7+"}),"\n",(0,t.jsx)(n.li,{children:"openssl and dom extensions"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"where-to-send-the-request",children:"Where to send the Request"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Live : ",(0,t.jsx)(n.a,{href:"https://secure.mobilpay.ro",children:"https://secure.mobilpay.ro"})]}),"\n",(0,t.jsxs)(n.li,{children:["Sandbox : ",(0,t.jsx)(n.a,{href:"https://sandboxsecure.mobilpay.ro",children:"https://sandboxsecure.mobilpay.ro"}),"\n(only HTTP POST requests accepted)"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"payment-request-structure",children:"Payment Request Structure"}),"\n",(0,t.jsxs)(n.p,{children:["In order to send the payment request to NETOPIA Payments , you need to encrypt the payment data on ",(0,t.jsx)(n.strong,{children:"POST"})," method and encapsulate the information using the following structure."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:'        <?xml version="1.0" encoding="utf-8"?>\n        <order type="card" id="string64" timestamp="YYYYmmddHHiiss">\n            <signature>XXXX-XXXX-XXXX-XXXX-XXXX</signature>\n            <invoice currency="RON" amount="XX.YY" installments="R1,R2"\n            selected_installments="R2" customer_type="2"\n            customer_id="internal_id" token_id="token_identifier"\n            pan_masked="NNNN">\n                <details>\n                    Payment Details\n                </details>\n                <contact_info>\n                    <billing type="company|person">\n                        <first_name>first_name</first_name>\n                        <last_name>last_name</last_name>\n                        <email>email_address</email>\n                        <address>address</address>\n                        <mobile_phone>mobile_phone</mobile_phone>\n                    </billing>\n                </contact_info>\n            </invoice>\n            <params>\n                <param>\n                    <name>param1Name</name>\n                    <value>param1Value</value>\n                </param>\n            </params>\n            <url>\n                <confirm>\n                    http://www.your_website.com/confirm\n                </confirm>\n                <return>\n                    http://www.your_website.com/return\n                </return>\n            </url>\n        </order>\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.h3,{id:"confirm-url",children:"Confirm URL"}),"\n","The confirm URL will be used for IPN (Instant Payment Notification) - i.e. to send information about the transaction's status."]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.h3,{id:"redirect-url",children:"Redirect URL"}),"\n","The redirect URL will be used to redirect User/Customer back to the Merchant's website from NETOPIA Payments (from the payment page, after the payment is done)"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"payment-response-structure",children:"Payment Response Structure"}),"\n",(0,t.jsx)(n.p,{children:"The response from NETOPIA Payments to your confirm URL will be in following structure"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:'    <?xml version="1.0" encoding="utf-8"?>\n    <order type="card" id="string64" timestamp="YYYYMMDDHHMMSS">\n    {your_request_XML}\n        <mobilpay timestamp="YYYYMMDDHHMMSS" crc="XXXXX">\n            <action>action_type</action>\n            <customer type="person|company">\n                <first_name>first_name</first_name>\n                <last_name>last_name</last_name>\n                <address>address</address>\n                <email>email_address</email>\n                <mobile_phone>phone_no</mobile_phone>\n            </customer>\n            <purchase>mobilPay_purchase_no</purchase>\n            <original_amount>XX.XX</original_amount>\n            <processed_amount>NN.NN</processed_amount>\n            <pan_masked>X****YYYY</pan_masked>\n            <payment_instrument_id>ZZZZZZZ</payment_instrument_id>\n            <token_id>token_identifier</token_id>\n            <token_expiration_date>YYYY-MM-DD HH:MM:SS</token_expiration_date>\n            <error code="N">error_message</error>\n        </mobilpay>\n    </order>\n'})}),"\n",(0,t.jsx)(n.h2,{id:"merchants-response",children:"Merchant's Response"}),"\n",(0,t.jsx)(n.p,{children:"For each call to your confirm URL, the Merchant will need to respond in XML format back to NETOPIA Payments, in order to help us understand whether you have successfully recorded the response or not."}),"\n",(0,t.jsx)(n.p,{children:"For debugging purposes, you may view your response in mobilPay console (Order \u2013 Details \u2013 Merchant Communication Log)"}),"\n",(0,t.jsx)(n.p,{children:"The following annotated description of the XML response structure shows the elements sent by you to the NETOPIA Payments API."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:'    <?xml version="1.0" encoding="utf-8" ?>\n    <crc error_type=\u201d1|2\u201d error_code=\u201d{numeric}\u201d>{message}</crc>\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The attributes of the crc element are only sent if you had any problem recording\nthe ",(0,t.jsx)(n.strong,{children:"IPN"}),"."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.h3,{id:"error_type",children:"error_type"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'set error_type  to "1", if there is a temporary error (this means that a retry mechanism will be activated and the IPN will be attempted again later on)'}),"\n",(0,t.jsx)(n.li,{children:'set error_type  to "2", if there is a permanent error'}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.h3,{id:"error_code",children:"error_code"}),"\n",(0,t.jsx)(n.p,{children:"This is your internal error code. If error_code is 0, then everything went fine on your end. Otherwise, based on error_type, there might be one or more retries (up to 20)"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.h3,{id:"message",children:"message"}),"\n",(0,t.jsx)(n.p,{children:"Your message, to helping you find the error."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"security",children:"Security"}),"\n",(0,t.jsx)(n.p,{children:"The messages exchanged with NETOPIA Payments are protected to ensure that only authorized requests are done."}),"\n",(0,t.jsx)(n.p,{children:"There are three levels of security:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Request authentication using an API Signature included in the request (Signature field)"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The data exchanged between the client \u2192 NETOPIA Payments server and back is encrypted using RSA keys"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Secure Sockets Layer (SSL) data transport for the request, optional, if available\non the merchant side, for the response."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["NETOPIA Payments API service is supporting the ",(0,t.jsx)(n.strong,{children:"3-D Secure"})," transactions (both v1 and v2)"]}),"\n",(0,t.jsx)(n.h3,{id:"appendix",children:"APPENDIX"}),"\n",(0,t.jsx)(n.h4,{id:"error-code-values",children:"Error Code Values"}),"\n",(0,t.jsx)(n.p,{children:"0 \u2013 approved\n16 \u2013 card has a risk (e.g. stolen card)\n17 \u2013 card number is incorrect\n18 \u2013 closed card\n19 \u2013 card is expired\n20 \u2013 insufficient funds\n21 \u2013 cVV2 code incorrect\n22 \u2013 issuer is unavailable\n32 \u2013 amount is incorrect\n33 \u2013 currency is incorrect\n34 \u2013 transaction not permitted to cardholder\n35 \u2013 transaction declined\n36 \u2013 transaction rejected by antifraud filters\n37 \u2013 transaction declined (breaking the law)\n38 \u2013 transaction declined\n48 \u2013 invalid request\n49 \u2013 duplicate PREAUTH\n50 \u2013 duplicate AUTH\n51 \u2013 you can only CANCEL a preauth order\n52 \u2013 you can only CONFIRM a preauth order\n53 \u2013 you can only CREDIT a confirmed order\n54 \u2013 credit amount is higher than auth amount\n55 \u2013 capture amount is higher than preauth amount\n56 \u2013 duplicate request\n99 \u2013 generic error"})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>o});var t=r(6540);const s={},i=t.createContext(s);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);