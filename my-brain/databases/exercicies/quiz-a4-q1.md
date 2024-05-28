---
id: Quiz-a4-q1
title: Quiz A4Q1
tags:
  - ODB
  - DB
---

Usando seu usuário do [Oracle Apex](https://apex.oracle.com/i/index.html) criado anteriormente, mostre todos os comandos usados para executar as solicitações abaixo, bem como o resultado de cada comando. Somente serão aceitas respostas inseridas pelo Moodle.

(a) Crie um Object Type chamado DEPARTMENTS_OBJ com a mesma estrutura da tabela relacional DEPARTMENTS, ou seja, os atributos do primeiro devem corresponder as colunas do segundo. Para visualizar a estrutura de DEPARTMENTS basta usar o comando DESCRIBE.

```sql
CREATE OR REPLACE TYPE DEPARTMENTS_OBJ AS OBJECT (
    DEPARTMENT_ID NUMBER(22),
    DEPARTMENT_NAME VARCHAR2(30),
    MANAGER_ID NUMBER(22),
    LOCATION_ID NUMBER(22)
);
```

(b) Cria uma Object_Table chamada DEPARTMENTS_TAB usando como molde o Object Type DEPARTMENTS_OBJ. O atributo department_id deve corresponder a uma chave primária em DEPARTMENTS_TAB.

```sql
CREATE TABLE DEPARTMENTS_TAB OF DEPARTMENTS_OBJ;
```

(c) Usando o comando INSERT INTO...SELECT..., copie as linhas da tabela relacional DEPARTMENTS para a Object Table DEPARTMENTS_TAB.

```sql
INSERT INTO DEPARTMENTS_TAB SELECT * FROM OEHR_DEPARTMENTS;
```

(d) Modifique o Object Type DEPARTMENTS_OBJ para adicionar e implementar o método conta_dep o qual deve ser capaz de retornar a quantidade de departamentos (objetos) armazenados em DEPARTMENTS_TAB que contém NULO no atributo manager_id. O aluno deve ser capaz de identificar qual deve ser o tipo do método conta_dep.

```sql
CREATE OR REPLACE TYPE DEPARTMENTS_OBJ AS OBJECT (
    DEPARTMENT_ID NUMBER(22),
    DEPARTMENT_NAME VARCHAR2(30),
    MANAGER_ID NUMBER(22),
    LOCATION_ID NUMBER(22),
    MAP MEMBER FUNCTION conta_dep RETURN NUMBER
);

CREATE OR REPLACE TYPE BODY DEPARTMENTS_OBJ AS
    MAP MEMBER FUNCTION conta_dep RETURN NUMBER IS
        v_count NUMBER(22);
    BEGIN
        SELECT COUNT(*) INTO v_count FROM DEPARTMENTS_TAB WHERE MANAGER_ID IS NULL;
        RETURN v_count;
    END;
END;
```

(e) Execute o método conta_dep e mostre o resultado. Dica: chame o método conta_dep a partir de uma consulta à tabela DUAL.

```sql
SELECT tab.conta_dep()
FROM DEPARTMENTS_TAB tab;
```
