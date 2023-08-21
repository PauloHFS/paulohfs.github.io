---
id: quiz-a1-q1
title: Quiz A1Q1
tags: 
    - ODB
    - DB
---

Com exceção das letras (a) e (b), mostre todos os comandos usados para executar as solicitações abaixo, bem como o resultado de cada comando.

(a) Crie o seu usuário no Oracle Apex. URL: <https://apex.oracle.com/i/index.html>.
(b) Crie o esquema HR Data.
(c) Visualize a estrutura da tabela employees. Atenção: visualizar a estrutura é diferente de visualizar os dados.

```sql
DESCRIBE OEHR_EMPLOYEES;
```

(d) Visualize os dados da tabela employees. Todos os empregados recebem comissão? Explique sua resposta.

```sql
SELECT * FROM OEHR_EMPLOYEES;
```

Não, se você verificar os valores há nulos utilizando o comando:

```sql
SELECT EMPLOYEE_ID, COMMISSION_PCT
FROM OEHR_EMPLOYEES
WHERE COMMISSION_PCT IS NULL;
```

(e) A coluna salary da tabela employees refere-se ao salário fixo mensal de um empregado. O valor total do salário mensal também deve considerar a comissão recebida (coluna commission_pct). Elabore uma consulta SQL para mostrar o salário total mensal de cada empregado.

```sql
SELECT FIRST_NAME, SALARY, COMMISSION_PCT, SALARY + (SALARY * COMMISSION_PCT) AS SALARY_TOTAL
FROM OEHR_EMPLOYEES;
```

(f) Todos os empregados estão associados a um departamento? E o contrário? Use FULL OUTER JOIN para descobrir. Explique sua resposta.

Para verificar se todos os empregados estão associados a um departamento, basta verificar se não há algum retorno no comando abaixo:

```sql
SELECT FIRST_NAME, DEPARTMENT_ID
FROM OEHR_EMPLOYEES
WHERE DEPARTMENT_ID IS NULL;
```

No caso dessa base de dados há empregados sem departamentos, pois o comando acima retorna 1 linha.

Para verificar se todos os departamentos estão associados a um empregado, basta verificar se não há algum retorno no comando abaixo:

```sql
SELECT OEHR_EMPLOYEES.FIRST_NAME, OEHR_DEPARTMENTS.DEPARTMENT_ID
FROM OEHR_DEPARTMENTS
FULL OUTER JOIN OEHR_EMPLOYEES 
ON OEHR_EMPLOYEES.DEPARTMENT_ID = OEHR_DEPARTMENTS.DEPARTMENT_ID
WHERE OEHR_EMPLOYEES.FIRST_NAME IS NULL;
```

No caso dessa base de dados há departamentos sem empregados, pois o comando acima retorna 16 linhas.

(g) O que significa a coluna manager_id da tabela employees?

A coluna `manager_id` armazena o um id de um empregado que nesse caso é o gerente do empregado em questão.

Este é um exemplo de auto-relacionamento, pois a tabela `employees` possui uma relação consigo mesma.

(h) Quantas linhas possuem as tabelas employees e departments?

```sql
SELECT count(*)
FROM OEHR_EMPLOYEES;
```

Retorna 107 linhas.

```sql
SELECT count(*)
FROM OEHR_DEPARTMENTS;
```

Retorna 27 linhas.

(i) Mediante uma consulta à tabela DUAL, verifique a data de hoje (use a função SYSDATE). Como seria possível retornar apenas data e hora?

```sql
SELECT TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') AS data_hora
FROM DUAL;
```
