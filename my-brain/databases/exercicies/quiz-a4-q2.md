---
id: Quiz-a4-q2
title: Quiz A4Q2
tags: 
    - ODB
    - DB
---

Usando seu usuário do Oracle Apex (<https://apex.oracle.com/i/index.html>) criado anteriormente, mostre todos os comandos necessários para executar as solicitações abaixo, bem como o resultado de cada comando. Somente serão aceitas respostas inseridas pelo Moodle. Crie apenas o que está sendo pedido.

(a) Crie o Object Type EMPRESA_TYPE com os seguintes atributos: CNPJ INTEGER, nome_fantasia VARCHAR2(30), pais VARCHAR2(25) e fundacao DATE.

```sql
CREATE OR REPLACE TYPE empresa_type AS OBJECT (
    CNPJ INTEGER,
    nome_fantasia VARCHAR2(30),
    pais VARCHAR2(25),
    fundacao DATE
)
```

(b) Crie o Object Type FUNCIONARIO_TYPE com os seguintes atributos: CPF INTEGER, nome VARCHAR2(30), sexo CHAR(1), nasc DATE e empresa REF EMPRESA_TYPE.

```sql
CREATE OR REPLACE TYPE funcionario_type AS OBJECT (
    CPF INTEGER,
    nome VARCHAR2(30),
    sexo CHAR(1),
    nasc DATE,
    empresa REF EMPRESA_TYPE
)
```

(c) Crie a Object Table empresa_tab usando como molde o Object Type empresa_type. O atributo cnpj deve ser a chave primária.

```sql
CREATE TABLE empresa_tab OF empresa_type (
    CONSTRAINT empresa_tab_pk PRIMARY KEY (cnpj)
)
```

(d) Crie a Object Table funcionario_tab usando como molde o Object Type funcionario_type. O atributo cpf deve ser a chave primária. O atributo empresa deve ser um chave estrangeira.

```sql
CREATE TABLE funcionario_tab OF funcionario_type (
    CONSTRAINT funcionario_tab_pk PRIMARY KEY (cpf),
    CONSTRAINT funcionario_tab_fk FOREIGN KEY (empresa) REFERENCES empresa_tab
)
```

(e) Usando dados fictícios, insira um objeto na Object Table empresa_tab.

```sql
INSERT INTO empresa_tab VALUES (
    123456789,
    'Empresa 1',
    'Brasil',
    TO_DATE('01/01/2000', 'DD/MM/YYYY')
)
```

(f) Usando dados fictícios, insira um objeto na Object Table funcionario_tab. O funcionário deve estar associado à empresa inserida na questão anterior.

```sql
INSERT INTO funcionario_tab VALUES (
    123456789,
    'Funcionario 1',
    'M',
    TO_DATE('01/01/2000', 'DD/MM/YYYY'),
    (SELECT REF(e) FROM empresa_tab e WHERE e.cnpj = 123456789)
)
```

(g) Modifique o Object Type empresa_type para adicionar o método CONTAEMPREGADOS que conte e retorne a quantidade de funcionários de uma empresa. Adicione e implemente o método. O aluno deve ser capaz de determinar o tipo de método, bem como se deve ser implementado como função ou procedure. Dica: para contar, use o comando SELECT COUNT(*) INTO...FROM...WHERE...

```sql
ALTER TYPE empresa_type ADD STATIC FUNCTION CONTAEMPREGADOS (cnpj NUMBER) RETURN NUMBER CASCADE;

CREATE OR REPLACE TYPE BODY empresa_type AS
    STATIC FUNCTION CONTAEMPREGADOS (cnpj INTEGER) RETURN NUMBER IS
        v_count NUMBER(22);
    BEGIN
        SELECT COUNT(*) INTO v_count FROM funcionario_tab WHERE empresa.cnpj = cnpj;
        RETURN v_count;
    END;
END;

DECLARE -- psql
    v_empregados INTEGER;
BEGIN
    v_empregados := empresa_type.CONTAEMPREGADOS('123456789');
    DBMS_OUTPUT.PUb T_LINE('Quantidade de carros da 123456789: ' || v_empregados);
END;

```

(h) Usando um comando SQL (SELECT), execute o método criado na questão anterior para exibir o nome fantasia de cada empresa e a quantidade de funcionários.
