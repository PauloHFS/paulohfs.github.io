"use strict";(self.webpackChunkpaulohernane_me=self.webpackChunkpaulohernane_me||[]).push([[6964],{5857:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=a(4848),n=a(5680);const i={id:"split-data",title:"Split Data"},s=void 0,c={id:"machine-learning-and-data-science-course/data-pre-processing/split-data",title:"Split Data",description:"We need to split the data in previsor variables and target variable. We will use the previsor variables to predict the target variable. The target variable is the variable we are trying to predict.",source:"@site/my-brain/machine-learning-and-data-science-course/data-pre-processing/split-data.md",sourceDirName:"machine-learning-and-data-science-course/data-pre-processing",slug:"/machine-learning-and-data-science-course/data-pre-processing/split-data",permalink:"/my-brain/machine-learning-and-data-science-course/data-pre-processing/split-data",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"split-data",title:"Split Data"},sidebar:"myBrainSidebar",previous:{title:"Handle Inconsistent Data",permalink:"/my-brain/machine-learning-and-data-science-course/data-pre-processing/handle-inconsistent-data"},next:{title:"Variables Types",permalink:"/my-brain/machine-learning-and-data-science-course/data-pre-processing/variables-types"}},o={},l=[{value:"Split Data",id:"split-data",level:3}];function p(e){const t={code:"code",h3:"h3",p:"p",pre:"pre",...(0,n.RP)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"We need to split the data in previsor variables and target variable. We will use the previsor variables to predict the target variable. The target variable is the variable we are trying to predict."}),"\n",(0,r.jsx)(t.h3,{id:"split-data",children:"Split Data"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"import pandas as pd\n\n# Load the dataset\ndata = pd.read_csv('data.csv')\n\n# Split the data into previsor variables and target variable\nX = data.drop('target', axis=1) # Previsor variables\ny = data['target'] # Target variable\n"})}),"\n",(0,r.jsx)(t.p,{children:"After splitting the data, we can further divide it into training and testing sets. The training set is used to train the machine learning model, while the testing set is used to evaluate its performance."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"from sklearn.model_selection import train_test_split\n\n# Split the data into training and testing sets\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)\n"})})]})}function d(e={}){const{wrapper:t}={...(0,n.RP)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},5680:(e,t,a)=>{a.d(t,{RP:()=>l});var r=a(6540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),l=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(a),g=n,h=u["".concat(o,".").concat(g)]||u[g]||p[g]||i;return a?r.createElement(h,s(s({ref:t},d),{},{components:a})):r.createElement(h,s({ref:t},d))}));d.displayName="MDXCreateElement"}}]);