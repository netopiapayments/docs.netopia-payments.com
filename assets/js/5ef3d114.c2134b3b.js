"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[3630],{6706:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var a=r(4848),n=r(8453),l=r(1470),o=r(9365);const s={sidebar_position:3,title:"Sample Request"},u="Authorize request example",i={id:"payment-api/authorize/sample-request",title:"Sample Request",description:"Sample code",source:"@site/docs/payment-api/authorize/sample-request.md",sourceDirName:"payment-api/authorize",slug:"/payment-api/authorize/sample-request",permalink:"/docs/payment-api/authorize/sample-request",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Sample Request"},sidebar:"docsSidebar",previous:{title:"Query parameters",permalink:"/docs/payment-api/authorize/authorize-query-parameters"},next:{title:"Authorize response",permalink:"/docs/payment-api/authorize/authorize-response"}},c={},p=[{value:"Sample code",id:"sample-code",level:2}];function d(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",pre:"pre",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"authorize-request-example",children:"Authorize request example"}),"\n",(0,a.jsx)(t.h2,{id:"sample-code",children:"Sample code"}),"\n",(0,a.jsx)(t.admonition,{title:"authorize",type:"tip",children:(0,a.jsxs)(l.A,{groupId:"operating-systems",children:[(0,a.jsx)(o.A,{value:"html",label:"HTML Request",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-html",children:'<html>\n    <head>\n        <title>NETOPIA Payments DEMO</title>\n    </head>\n    <body>\n        <form method="POST" action="https://secure.sandbox.netopia-payments.com/sandbox/authorize">\n            <input type="hidden" name="paReq" value="rcrO9tXAiBpwv-ZE4JQ4yeI-tbf6aJ0ZsCV-cEa9pvHEtfg-IVEm9YrypUW_--AcWWwLQB9pyI="/>\n            <input type="hidden" name="backUrl" value="http://yourdomain.com/example/backUrl.php"/>\n            <input type="submit" value="Submit">\n        </form>\n    </body>\n</html>\n'})})}),(0,a.jsx)(o.A,{value:"curl",label:"Curl Request",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:"curl --location --request POST 'https://secure.sandbox.netopia-payments.com/sandbox/authorize' \\\n--form 'paReq=\"rcrO9tXAiBpwv-ZE4JQ4yeI-tbf6aJ0ZsCV-cEa9pvHEtfg-IVEm9YrypUW_--AcWWwLQB9pyI=\"' \\\n--form 'backUrl=\"http://yourdomain.com/example/backUrl.php\"'\n"})})}),(0,a.jsx)(o.A,{value:"php",label:"Php Request",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-php",children:"<?php\n\n$curl = curl_init();\n\ncurl_setopt_array($curl, array(\n  CURLOPT_URL => 'https://secure.sandbox.netopia-payments.com/sandbox/authorize',\n  CURLOPT_RETURNTRANSFER => true,\n  CURLOPT_ENCODING => '',\n  CURLOPT_MAXREDIRS => 10,\n  CURLOPT_TIMEOUT => 0,\n  CURLOPT_FOLLOWLOCATION => true,\n  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n  CURLOPT_CUSTOMREQUEST => 'POST',\n  CURLOPT_POSTFIELDS => array('paReq' => 'rcrO9tXAiBpwv-ZE4JQ4yeI-tbf6aJ0ZsCV-cEa9pvHEtfg-IVEm9YrypUW_--AcWWwLQB9pyI=','backUrl' => 'http://yourdomain.com/example/backUrl.php'),\n));\n\n$response = curl_exec($curl);\n\ncurl_close($curl);\necho $response;\n"})})})]})})]})}function m(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},9365:(e,t,r)=>{r.d(t,{A:()=>o});r(6540);var a=r(4164);const n={tabItem:"tabItem_Ymn6"};var l=r(4848);function o(e){let{children:t,hidden:r,className:o}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,a.A)(n.tabItem,o),hidden:r,children:t})}},1470:(e,t,r)=>{r.d(t,{A:()=>E});var a=r(6540),n=r(4164),l=r(3104),o=r(6347),s=r(205),u=r(7485),i=r(1682),c=r(9466);function p(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return p(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}(r);return function(e){const t=(0,i.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:r}=e;const n=(0,o.W6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,u.aZ)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,l=d(e),[o,u]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[i,p]=h({queryString:r,groupId:n}),[b,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,c.Dv)(r);return[n,(0,a.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:n}),v=(()=>{const e=i??b;return m({value:e,tabValues:l})?e:null})();(0,s.A)((()=>{v&&u(v)}),[v]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);u(e),p(e),f(e)}),[p,f,l]),tabValues:l}}var f=r(2303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=r(4848);function x(e){let{className:t,block:r,selectedValue:a,selectValue:o,tabValues:s}=e;const u=[],{blockElementScrollPositionUntilNextRender:i}=(0,l.a_)(),c=e=>{const t=e.currentTarget,r=u.indexOf(t),n=s[r].value;n!==a&&(i(t),o(n))},p=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;t=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;t=u[r]??u[u.length-1];break}}t?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":r},t),children:s.map((e=>{let{value:t,label:r,attributes:l}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>u.push(e),onKeyDown:p,onClick:c,...l,className:(0,n.A)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":a===t}),children:r??t},t)}))})}function g(e){let{lazy:t,children:r,selectedValue:n}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function T(e){const t=b(e);return(0,y.jsxs)("div",{className:(0,n.A)("tabs-container",v.tabList),children:[(0,y.jsx)(x,{...t,...e}),(0,y.jsx)(g,{...t,...e})]})}function E(e){const t=(0,f.A)();return(0,y.jsx)(T,{...e,children:p(e.children)},String(t))}},8453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>s});var a=r(6540);const n={},l=a.createContext(n);function o(e){const t=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),a.createElement(l.Provider,{value:t},e.children)}}}]);