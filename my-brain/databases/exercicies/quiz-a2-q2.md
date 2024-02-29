---
id: Quiz-a2-q2
title: Quiz A2Q2
tags: 
    - ODB
    - DB
---

Mostre todos os comandos usados para executar as solicitações abaixo, bem como o resultado de cada comando.

(a) Crie uma tabela relacional chamada PROFISSIONAL_TAB com as seguintes colunas: empregado PROFISSIONAL_TYPE e departamento INTEGER.

```sql
CREATE TABLE PROFISSIONAL_TAB (
    EMPREGADO PROFISSIONAL_TYPE,
    DEPARTAMENTO INTEGER
);
```

(b) Visualize a estrutura da tabela criada com o comando DESCRIBE.

```sql
DESCRIBE PROFISSIONAL_TAB;
```

(c) Usando o método construtor de PROFISSIONAL_TYPE, insira uma linha na tabela PROFISSIONAL_TAB com os seguintes dados: 100, 'José', SYSDATE e 10.

```sql
INSERT INTO PROFISSIONAL_TAB
VALUES (
    PROFISSIONAL_TYPE(100, 'José', SYSDATE),
    10
);
```

(d) Agora, sem usar o método construtor, tente inserir outra linha na tabela PROFISSIONAL_TAB com os seguintes dados: 101, 'Maria', SYSDATE e 11. Você conseguiu inserir a segunda linha? Qual a sua conclusão?

```sql
INSERT INTO PROFISSIONAL_TAB
VALUES (
    101, 
    'Maria', 
    SYSDATE,
    11
);
```

Esse comando não funcionou e retornou o seguinte erro:

> Error at line 1/13: ORA-00913: too many values
> ORA-06512: at "SYS.WWV_DBMS_SQL_APEX_230100", line 797
> ORA-06512: at "SYS.DBMS_SYS_SQL", line 1658
> ORA-06512: at "SYS.WWV_DBMS_SQL_APEX_230100", line 782
> ORA-06512: at "APEX_230100.WWV_FLOW_DYNAMIC_EXEC", line 2035
>
>1. INSERT INTO PROFISSIONAL_TAB
>2. VALUES (
>3. 101, 'Maria', SYSDATE,

(e) Com um comando SELECT, mostre todas as linhas e colunas da tabela PROFISSIONAL_TAB.

```sql
SELECT * FROM PROFISSIONAL_TAB;
```
