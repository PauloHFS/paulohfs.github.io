"use strict";(self.webpackChunkpaulohernane_me=self.webpackChunkpaulohernane_me||[]).push([[881],{1475:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>c,contentTitle:()=>t,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=s(4848),n=s(5680);const o={id:"quiz-a1-q1",title:"Quiz A1Q1",tags:["ODB","DB"]},t=void 0,i={id:"databases/exercicies/quiz-a1-q1",title:"Quiz A1Q1",description:"Com exce\xe7\xe3o das letras (a) e (b), mostre todos os comandos usados para executar as solicita\xe7\xf5es abaixo, bem como o resultado de cada comando.",source:"@site/my-brain/databases/exercicies/quiz-a1-q1.md",sourceDirName:"databases/exercicies",slug:"/databases/exercicies/quiz-a1-q1",permalink:"/my-brain/databases/exercicies/quiz-a1-q1",draft:!1,unlisted:!1,tags:[{label:"ODB",permalink:"/my-brain/tags/odb"},{label:"DB",permalink:"/my-brain/tags/db"}],version:"current",frontMatter:{id:"quiz-a1-q1",title:"Quiz A1Q1",tags:["ODB","DB"]},sidebar:"myBrainSidebar",previous:{title:"In Class Exercice 1",permalink:"/my-brain/databases/exercicies/in-class-exercice-1"},next:{title:"Quiz A2Q2",permalink:"/my-brain/databases/exercicies/Quiz-a2-q1"}},c={},l=[];function d(e){const a={a:"a",code:"code",p:"p",pre:"pre",...(0,n.RP)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.p,{children:"Com exce\xe7\xe3o das letras (a) e (b), mostre todos os comandos usados para executar as solicita\xe7\xf5es abaixo, bem como o resultado de cada comando."}),"\n",(0,r.jsxs)(a.p,{children:["(a) ",(0,r.jsx)(a.a,{href:"https://apex.oracle.com/i/index.html",children:"Crie o seu usu\xe1rio no Oracle Apex"}),"."]}),"\n",(0,r.jsx)(a.p,{children:"(b) Crie o esquema HR Data."}),"\n",(0,r.jsx)(a.p,{children:"(c) Visualize a estrutura da tabela employees. Aten\xe7\xe3o: visualizar a estrutura \xe9 diferente de visualizar os dados."}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-sql",children:"DESCRIBE OEHR_EMPLOYEES;\n"})}),"\n",(0,r.jsx)(a.p,{children:"(d) Visualize os dados da tabela employees. Todos os empregados recebem comiss\xe3o? Explique sua resposta."}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-sql",children:"SELECT * FROM OEHR_EMPLOYEES;\n"})}),"\n",(0,r.jsx)(a.p,{children:"N\xe3o, se voc\xea verificar os valores h\xe1 nulos utilizando o comando:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-sql",children:"SELECT EMPLOYEE_ID, COMMISSION_PCT\nFROM OEHR_EMPLOYEES\nWHERE COMMISSION_PCT IS NULL;\n"})}),"\n",(0,r.jsx)(a.p,{children:"(e) A coluna salary da tabela employees refere-se ao sal\xe1rio fixo mensal de um empregado. O valor total do sal\xe1rio mensal tamb\xe9m deve considerar a comiss\xe3o recebida (coluna commission_pct). Elabore uma consulta SQL para mostrar o sal\xe1rio total mensal de cada empregado."}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-sql",children:"SELECT FIRST_NAME, SALARY, COMMISSION_PCT, SALARY + (SALARY * COMMISSION_PCT) AS SALARY_TOTAL\nFROM OEHR_EMPLOYEES;\n"})}),"\n",(0,r.jsx)(a.p,{children:"(f) Todos os empregados est\xe3o associados a um departamento? E o contr\xe1rio? Use FULL OUTER JOIN para descobrir. Explique sua resposta."}),"\n",(0,r.jsx)(a.p,{children:"Para verificar se todos os empregados est\xe3o associados a um departamento, basta verificar se n\xe3o h\xe1 algum retorno no comando abaixo:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-sql",children:"SELECT FIRST_NAME, DEPARTMENT_ID\nFROM OEHR_EMPLOYEES\nWHERE DEPARTMENT_ID IS NULL;\n"})}),"\n",(0,r.jsx)(a.p,{children:"No caso dessa base de dados h\xe1 empregados sem departamentos, pois o comando acima retorna 1 linha."}),"\n",(0,r.jsx)(a.p,{children:"Para verificar se todos os departamentos est\xe3o associados a um empregado, basta verificar se n\xe3o h\xe1 algum retorno no comando abaixo:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-sql",children:"SELECT OEHR_EMPLOYEES.FIRST_NAME, OEHR_DEPARTMENTS.DEPARTMENT_ID\nFROM OEHR_DEPARTMENTS\nFULL OUTER JOIN OEHR_EMPLOYEES\nON OEHR_EMPLOYEES.DEPARTMENT_ID = OEHR_DEPARTMENTS.DEPARTMENT_ID\nWHERE OEHR_EMPLOYEES.FIRST_NAME IS NULL;\n"})}),"\n",(0,r.jsx)(a.p,{children:"No caso dessa base de dados h\xe1 departamentos sem empregados, pois o comando acima retorna 16 linhas."}),"\n",(0,r.jsx)(a.p,{children:"(g) O que significa a coluna manager_id da tabela employees?"}),"\n",(0,r.jsxs)(a.p,{children:["A coluna ",(0,r.jsx)(a.code,{children:"manager_id"})," armazena o um id de um empregado que nesse caso \xe9 o gerente do empregado em quest\xe3o."]}),"\n",(0,r.jsxs)(a.p,{children:["Este \xe9 um exemplo de auto-relacionamento, pois a tabela ",(0,r.jsx)(a.code,{children:"employees"})," possui uma rela\xe7\xe3o consigo mesma."]}),"\n",(0,r.jsx)(a.p,{children:"(h) Quantas linhas possuem as tabelas employees e departments?"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-sql",children:"SELECT count(*)\nFROM OEHR_EMPLOYEES;\n"})}),"\n",(0,r.jsx)(a.p,{children:"Retorna 107 linhas."}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-sql",children:"SELECT count(*)\nFROM OEHR_DEPARTMENTS;\n"})}),"\n",(0,r.jsx)(a.p,{children:"Retorna 27 linhas."}),"\n",(0,r.jsx)(a.p,{children:"(i) Mediante uma consulta \xe0 tabela DUAL, verifique a data de hoje (use a fun\xe7\xe3o SYSDATE). Como seria poss\xedvel retornar apenas data e hora?"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-sql",children:"SELECT TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') AS data_hora\nFROM DUAL;\n"})})]})}function m(e={}){const{wrapper:a}={...(0,n.RP)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},5680:(e,a,s)=>{s.d(a,{RP:()=>l});var r=s(6540);function n(e,a,s){return a in e?Object.defineProperty(e,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[a]=s,e}function o(e,a){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),s.push.apply(s,r)}return s}function t(e){for(var a=1;a<arguments.length;a++){var s=null!=arguments[a]?arguments[a]:{};a%2?o(Object(s),!0).forEach((function(a){n(e,a,s[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):o(Object(s)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(s,a))}))}return e}function i(e,a){if(null==e)return{};var s,r,n=function(e,a){if(null==e)return{};var s,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)s=o[r],a.indexOf(s)>=0||(n[s]=e[s]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)s=o[r],a.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(n[s]=e[s])}return n}var c=r.createContext({}),l=function(e){var a=r.useContext(c),s=a;return e&&(s="function"==typeof e?e(a):t(t({},a),e)),s},d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var s=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=l(s),u=n,E=p["".concat(c,".").concat(u)]||p[u]||d[u]||o;return s?r.createElement(E,t(t({ref:a},m),{},{components:s})):r.createElement(E,t({ref:a},m))}));m.displayName="MDXCreateElement"}}]);