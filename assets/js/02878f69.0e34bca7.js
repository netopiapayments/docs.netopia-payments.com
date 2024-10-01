"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[1151],{7456:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var i=o(4848),t=o(8453);const s={sidebar_position:4,title:"Magento Plugin"},r="NETOPIA Payments module for Magento 2.4.X",l={id:"payment-plugins/magento",title:"Magento Plugin",description:"(for previous versions using the other branches of this GitHub repository)",source:"@site/docs/payment-plugins/magento.md",sourceDirName:"payment-plugins",slug:"/payment-plugins/magento",permalink:"/docs/payment-plugins/magento",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Magento Plugin"},sidebar:"docsSidebar",previous:{title:"Prestashop Plugin",permalink:"/docs/payment-plugins/prestashop"},next:{title:"OpenCart Plugin",permalink:"/docs/payment-plugins/opencart"}},a={},d=[{value:"(for previous versions using the other branches of this GitHub repository)",id:"for-previous-versions-using-the-other-branches-of-this-github-repository",level:6},{value:"Options",id:"options",level:2},{value:"Installation",id:"installation",level:2},{value:"Additional option",id:"additional-option",level:6},{value:"Verification",id:"verification",level:2},{value:"After installation",id:"after-installation",level:2},{value:"Configuration",id:"configuration",level:4},{value:"Where Keys / Certificates are located",id:"where-keys--certificates-are-located",level:2},{value:"Other general usefull note",id:"other-general-usefull-note",level:3},{value:"Good to know",id:"good-to-know",level:5},{value:"Tested up to :",id:"tested-up-to-",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"netopia-payments-module-for-magento-24x",children:"NETOPIA Payments module for Magento 2.4.X"})}),"\n",(0,i.jsxs)(n.h6,{id:"for-previous-versions-using-the-other-branches-of-this-github-repository",children:["(for previous versions using the other branches of ",(0,i.jsx)(n.a,{href:"https://github.com/mobilpay/Magento",children:"this GitHub repository"}),")"]}),"\n",(0,i.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Card payment"}),"\n",(0,i.jsx)(n.li,{children:"mobilPay WALLET"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(n.p,{children:'The Module placed in folder "Netopia"'}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["put ",(0,i.jsx)(n.strong,{children:"Netopia"})," folder inside of < your_magento_root >/app/code/"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"verify the ownership & make sure have right user and/or group ownership"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"SSH to your Magento server and run the following commands"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"php bin/magento setup:upgrade"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"php bin/magento setup:static-content:deploy"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"php bin/magento ca:cl"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Complete the ",(0,i.jsx)(n.strong,{children:"Configuration"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Enable"})," the module."]}),"\n",(0,i.jsx)(n.h6,{id:"additional-option",children:"Additional option"}),"\n",(0,i.jsxs)(n.p,{children:["By Enable the ",(0,i.jsx)(n.strong,{children:"Allow mobilPay WALLET Payment"})," you will give this option to your clients to pay also via ",(0,i.jsx)(n.strong,{children:"mobilPay WALLET"})," by scan a simple ",(0,i.jsx)(n.strong,{children:"QrCode"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["To use ",(0,i.jsx)(n.strong,{children:"mobilPay WALLET Payment"}),", the ",(0,i.jsx)(n.strong,{children:"Username"})," and ",(0,i.jsx)(n.strong,{children:"Password"})," should be set as your account on ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"https://admin.mobilpay.ro",children:"https://admin.mobilpay.ro"})})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Download your keys from ",(0,i.jsx)(n.a,{href:"https://admin.mobilpay.ro/",children:"https://admin.mobilpay.ro/"})," for Live mode and ",(0,i.jsx)(n.a,{href:"https://sandbox.mobilpay.ro",children:"https://sandbox.mobilpay.ro"})," for Sandbox mode.\nSet your Mode at Mode ",(0,i.jsx)(n.strong,{children:"Configuration"})," and  Upload the certificates."]}),"\n",(0,i.jsxs)(n.p,{children:["Note : if you would like to have possibility to work with both mode (",(0,i.jsx)(n.strong,{children:"Sandbox and Live"}),"), you will need the keys for each mode."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"verification",children:"Verification"}),"\n",(0,i.jsx)(n.p,{children:"By run the following command you can make sure, if this module is installed successfully on your Magento Proiect"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"php bin/magento module:status"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"after-installation",children:"After installation"}),"\n",(0,i.jsxs)(n.p,{children:["Recommended to firstly, go to Admin panel & fill the necessary data\n",(0,i.jsx)(n.code,{children:"<your_magento_admin>->Stores->Configuration->Sales->Payment Methods->Netopia Payments"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.h4,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Base configuration"})," : To enable / disable the payment method, switch to Live or Sandbox, ...."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Certificate Configuration"})," : To uploade / remove the public & private keys for Live & Sandbox"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Custom configuration"})," : To set order status regarding the payment status, recommanded to use Defulte one"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"mobilPay WALLET Configuration"})," : To set mobilPay WALLET setting"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Conditions / Agreements"})," : To declare the agreements with NETOPIA Payments and send the agreement to NETOPIA Payments.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"before send the agreements, make sure you already uploaded the keys & save the setting & agreements."}),"\n"]}),"\n"]}),"\n"]}),"\n","Note : The fileds are not complited from configuration section, will set by default value,"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"where-keys--certificates-are-located",children:"Where Keys / Certificates are located"}),"\n",(0,i.jsx)(n.p,{children:"The Public & Private Keys for Live and Sandbox are located in < your_magento_root >/app/code/Netopia/Netcard/etc/certificates"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"make sure you have right ownership & permition"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"other-general-usefull-note",children:"Other general usefull note"}),"\n",(0,i.jsxs)(n.p,{children:["If in any case you update/upgrade your Magento Module & not see the changes, so maybe is cached.\nYou can using such command like this ",(0,i.jsx)(n.code,{children:"php bin/magento ca:cl"})," to clean the cache or\nUsing such command ",(0,i.jsx)(n.code,{children:"bin/magento setup:di:compile"})," to compile or regenerate your modules.\nSometime remove the contents of actual cache folders such as ",(0,i.jsx)(n.code,{children:"MagentoRoot/var/cache/"})," | ",(0,i.jsx)(n.code,{children:"MagentoRoot/var/page_cache/"})," | ",(0,i.jsx)(n.code,{children:"MagentoRoot/generated/code"})," is helping too"]}),"\n",(0,i.jsx)(n.h5,{id:"good-to-know",children:"Good to know"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["To get the module compatible with previous versions of Magento, using the other branches of this GitHub repository. for ex. for Magento Version 2.3.X we can get the module by run git command like : ",(0,i.jsxs)(n.strong,{children:["git clone --single-branch --branch V2.3 ",(0,i.jsx)(n.a,{href:"https://github.com/mobilpay/Magento.git",children:"https://github.com/mobilpay/Magento.git"})]})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"NETOPIA Payments development team try to keep compatibility of the Magento module with latest version of Magento, in order to helping you to implamenting your ecomerce website faster."}),"\n",(0,i.jsx)(n.h2,{id:"tested-up-to-",children:"Tested up to :"}),"\n",(0,i.jsxs)(n.p,{children:["Magento : ",(0,i.jsx)(n.strong,{children:"2.4.6"})]}),"\n",(0,i.jsxs)(n.p,{children:["PHP : ",(0,i.jsx)(n.strong,{children:"8.2.8"})]}),"\n",(0,i.jsxs)(n.p,{children:["Openssl : ",(0,i.jsx)(n.strong,{children:"3.0"})]})]})}function c(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>l});var i=o(6540);const t={},s=i.createContext(t);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);