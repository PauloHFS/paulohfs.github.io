---
id: Quiz-a2-q1
title: Quiz A2Q2
tags: 
    - ODB
    - DB
---

Mostre todos os comandos usados para executar as solicitações abaixo, bem como o resultado de cada comando.

(a) Crie um Object Type chamado PROFISSIONAL_TYPE com os seguintes atributos: matricula INTEGER, nome VARCHAR2(30) e admissao DATE.

```sql
CREATE OR REPLACE TYPE PROFISSIONAL_TYPE AS OBJECT (
    matricula INTEGER,
    nome VARCHAR2(30),
    admissao DATE
)
```

(b) Visualize a estrutura do Object Type criado com o comando DESCRIBE.

```sql
DESCRIBE PROFISSIONAL_TYPE;
```

O describe não retornou nada util, mas pesquisando encontrei esse comando que retorna os atributos do tipo:

```sql
SELECT
    attr_name,
    attr_type_name,
    length,
    scale
FROM
    all_type_attrs
WHERE
    type_name = 'PROFISSIONAL_TYPE';
```

(c) Use o Object Type criado anteriormente como molde para criar uma Object Table chamada PROFISSIONAL_OBJ_TAB.

```sql
CREATE TABLE PROFISSIONAL_OBJ_TAB OF PROFISSIONAL_TYPE;
```

(d) Usando o método construtor, insira uma linha (Object Row) na Object Table PROFISSIONAL_OBJ_TAB com os seguintes dados: 100, 'José' e SYSDATE.

```sql
INSERT INTO PROFISSIONAL_OBJ_TAB 
VALUES (
    PROFISSIONAL_TYPE(100, 'José', SYSDATE)
);
```

(e) Agora, sem usar o método construtor, tente inserir outra linha (Object Row) na Object Table PROFISSIONAL_OBJ_TAB com os seguintes dados: 101, 'Maria' e SYSDATE. Você conseguiu inserir a segunda linha? Qual a sua conclusão?

Executei o seguinte comando no Apex:

```sql
INSERT INTO PROFISSIONAL_OBJ_TAB 
VALUES (101, 'Maria', SYSDATE);
```

E ele inseriu sim o dado na tabela, creio que ele tenha usado o método construtor por mim. Não sei se era previsto a inserção sem o uso do método construtor, mas acredito que não.

(f) Com um comando SELECT, mostre todas as linhas (Object Rows) e colunas da Object Table PROFISSIONAL_OBJ_TAB.

```sql
SELECT * FROM PROFISSIONAL_OBJ_TAB;
```
