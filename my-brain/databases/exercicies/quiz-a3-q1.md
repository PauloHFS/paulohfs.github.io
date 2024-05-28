---
id: Quiz-a3-q1
title: Quiz A3Q1
tags:
  - ODB
  - DB
---

Usando seu usuário do [Oracle Apex](https://apex.oracle.com/i/index.html) criado anteriormente, mostre todos os comandos usados para executar as solicitações abaixo, bem como o resultado de cada comando. Somente serão aceitas respostas inseridas pelo Moodle.

(a) Crie um Object Type chamado TELEFONE_OBJ_TYPE com os seguintes atributos:
pais CHAR(3), ddd CHAR(2) e numero CHAR(9).

```sql
CREATE OR REPLACE TYPE TELEFONE_OBJ_TYPE AS OBJECT (
    pais CHAR(3),
    ddd CHAR(2),
    numero CHAR(9)
);
```

(b) Crie um Object Type chamado ENDERECO_OBJ_TYPE com os seguintes atributos:
rua VARCHAR2(20), numero VARCHAR2(5), complemento VARCHAR2(10), bairro VARCHAR2(20), cidade VARCHAR2(20) e estado CHAR(2).

```sql
CREATE OR REPLACE TYPE ENDERECO_OBJ_TYPE AS OBJECT (
    rua VARCHAR2(20),
    numero VARCHAR2(5),
    complemento VARCHAR2(10),
    bairro VARCHAR2(20),
    cidade VARCHAR2(20),
    estado CHAR(2)
);
```

(c) Crie um Object Type chamado CONTRIBUINTE_OBJ_TYPE com os seguintes atributos: cpf VARCHAR2(11), nome VARCHAR2(30), nascimento DATE, telefone TELEFONE_OBJ_TYPE e endereco ENDERECO_OBJ_TYPE.

```sql
CREATE OR REPLACE TYPE CONTRIBUINTE_OBJ_TYPE AS OBJECT (
    cpf VARCHAR2(11),
    nome VARCHAR2(30),
    nascimento DATE,
    telefone TELEFONE_OBJ_TYPE,
    endereco ENDERECO_OBJ_TYPE
);
```

Aqui temos a composição de objetos, onde um objeto pode ser composto por outros objetos.

(d) Use o Object Type CONTRIBUINTE_OBJ_TYPE como molde para criar uma Object Table chamada CONTRIBUINTE_OBJ_TAB.

```sql
CREATE TABLE CONTRIBUINTE_OBJ_TAB OF CONTRIBUINTE_OBJ_TYPE;
```

(e) Visualize a estrutura da Object Table CONTRIBUINTE_OBJ_TAB.

```sql
DESCRIBE CONTRIBUINTE_OBJ_TAB;
```

(f) Usando o método construtor, insira duas linhas (Object Rows) na Object Table CONTRIBUINTE_OBJ_TAB. Use dados fictícios de sua escolha.

```SQL
INSERT INTO CONTRIBUINTE_OBJ_TAB
VALUES (
    CONTRIBUINTE_OBJ_TYPE(
        '12345678901',
        'José',
        TO_DATE('01/01/2000', 'DD/MM/YYYY'),
        TELEFONE_OBJ_TYPE(
            '55',
            '83',
            '987654321'
        ),
        ENDERECO_OBJ_TYPE(
            'Rua 1',
            '123',
            'Apto 1',
            'Bairro 1',
            'Cidade 1',
            'PB'
        )
    )
);

INSERT INTO CONTRIBUINTE_OBJ_TAB
VALUES (
    CONTRIBUINTE_OBJ_TYPE(
        '98765432101',
        'Maria',
        TO_DATE('01/01/2000', 'DD/MM/YYYY'),
        TELEFONE_OBJ_TYPE(
            '55',
            '83',
            '123456789'
        ),
        ENDERECO_OBJ_TYPE(
            'Rua 2',
            '321',
            'Apto 2',
            'Bairro 2',
            'Cidade 2',
            'PB'
        )
    )
);
```

(g) Adicione um método chamado format_phone ao Object Type CONTRIBUINTE_OBJ_TYPE para retornar o número de telefone formatado de um determinado objeto. O aluno deve ser capaz de escolher o tipo do método apropriado bem como se o mesmo deve ser implementado como função ou procedure. O formato esperado de número de telefone é +55 (83) 98754-8276. Quando necessário, procure na documentação do Oracle por funções que lidam com dados textuais.

```sql
CREATE OR REPLACE TYPE CONTRIBUINTE_OBJ_TYPE AS OBJECT (
    cpf VARCHAR2(11),
    nome VARCHAR2(30),
    nascimento DATE,
    telefone TELEFONE_OBJ_TYPE,
    endereco ENDERECO_OBJ_TYPE,
    MAP MEMBER FUNCTION format_phone RETURN VARCHAR2
);

CREATE OR REPLACE TYPE BODY CONTRIBUINTE_OBJ_TYPE AS
    MEMBER FUNCTION format_phone RETURN VARCHAR2 IS
        formated_phone VARCHAR2(20);
    BEGIN
        formated_phone := '+' || self.telefone.pais || ' (' || self.telefone.ddd || ') ' || self.telefone.numero;
        RETURN formated_phone;
    END;
END;
```

(h) Escreva um comando SELECT sobre a tabela CONTRIBUINTE_OBJ_TAB para chamar o método criado na questão anterior e mostrar na tela o número do telefone formatado de todos os contribuintes.

```sql
SELECT c.format_phone() AS formated_phone
FROM CONTRIBUINTE_OBJ_TAB c;
```
