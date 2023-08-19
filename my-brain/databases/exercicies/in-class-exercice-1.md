---
id: in-class-exercice-1
title: In Class Exercice 1
tags: 
    - ODB
    - DB
    - Object Relational Database
    - Object Types
    - Object Tables
    - Methods
    - Procedures
    - Functions
    - REF
    - CASCADE
---

# In Class Exercice 1

This is a exercice to practice the creation of object types, object tables, and methods. Done on 18/08/2023 on DB2 class.

1. Create the Object types
2. Create the Object tables
3. Add integrity constraints to the tables (primary key, foreign key, etc)

```sql

-- First create the Objects types
CREATE OR REPLACE TYPE endereco_type AS OBJECT
(
    codigo INTEGER,
    rua VARCHAR2(50),
    numero INTEGER,
    bairro VARCHAR2(50),
);

CREATE TYPE pessoa_type AS OBJECT
(
    cpf INTEGER,
    nome VARCHAR2(50),
    idade INTEGER,
    sexo char(1),
    -- endereco endereco_type; -- this you dont need to build object table
    endereco REF endereco_type; -- this you need to build object table
);


CREATE OR REPLACE carro_type AS OBJECT
(
    chassis INTEGER,
    marca VARCHAR2(50),
    ano INTEGER,
    cor VARCHAR2(50),
    -- proprietario pessoa_type, or -- this you dont need to build object table
    proprietario REF pessoa_type -- this you need to build object table
)
-----------------------------------------------

-- Create the Object tables

CREATE TABLE endereco_table OF endereco_type
(
    -- adiciona a constraint de chave primaria
    CONSTRAINT endereco_table_pk PRIMARY KEY (codigo)
);

CREATE TABLE pessoa_table OF pessoa_type
(
    -- adiciona a constraint de chave primaria
    CONSTRAINT pessoa_table_pk PRIMARY KEY (cpf),
    -- adiciona a constraint de chave estrangeira
    CONSTRAINT pessoa_table_fk FOREIGN KEY (endereco) REFERENCES endereco_table
);

CREATE TABLE carro_table OF carro_type
(
    -- adiciona a constraint de chave primaria
    CONSTRAINT carro_table_pk PRIMARY KEY (chassis),
    -- adiciona a constraint de chave estrangeira
    CONSTRAINT carro_table_fk FOREIGN KEY (proprietario) REFERENCES pessoa_table
);

-----------------------------------------------

-- Insert data into the tables

INSERT INTO endereco_table VALUES (endereco_type(1, 'Rua 1', 1, 'Bairro 1'));

INSERT INTO pessoa_table VALUES (pessoa_type(1, 'Pessoa 1', 20, 'M', (SELECT REF(e) FROM endereco_table e WHERE e.codigo = 1)));

INSERT INTO carro_table VALUES (carro_type(1, 'Marca 1', 2020, 'Cor 1', (SELECT REF(p) FROM pessoa_table p WHERE p.cpf = 1)));

SELECT e.* FROM endereco_table e;

SELECT p.* FROM pessoa_table p;

SELECT c.* FROM carro_table c;

SELECT c.chassis, c.proprietario.nome, c.proprietario.endereco.rua FROM carro_table c;

-----------------------------------------------

-- Alter the type

ALTER TYPE pessoa_type ADD ATTRIBUTE birth_date DATE;

-- Update the new date

UPDATE pessoa_table SET birth_date = TO_DATE('01/01/2000', 'DD/MM/YYYY') WHERE cpf = 1;

-----------------------------------------------

-- METHODS

-- Create a static method as a procedure (static because it runs with all pessoa)
ALTER TYPE pessoa_type ADD STATIC PROCEDURE sync_idade CASCADE;

CREATE OR REPLACE TYPE BODY pessoa_type AS
    STATIC PROCEDURE sync_idade IS
    -- local variables
    BEGIN
        UPDATE pessoa_table SET idade = TRUNC(MONTHS_BETWEEN(SYSDATE, birth_date) / 12);
    END;
END;

-- Call the procedure

BEGIN -- psql
    pessoa_type.sync_idade();
END;

--- Method as a Function

ALTER TYPE pessoa_type ADD STATIC FUNCTION contamarca (p_marca in VARCHAR2) return INTEGER CASCADE; -- error

ALTER TYPE pessoa_type DROP STATIC FUNCTION contamarca (p_marca in VARCHAR2) return INTEGER CASCADE;

ALTER TYPE carro_type ADD STATIC FUNCTION contamarca (p_marca in VARCHAR2) return INTEGER CASCADE;

CREATE OR REPLACE TYPE BODY carro_type AS
    STATIC FUNCTION contamarca (p_marca in VARCHAR2) return INTEGER IS
    -- local variables
    v_conta INTEGER;
    BEGIN
        SELECT COUNT(*) INTO v_conta FROM carro_table WHERE marca = p_marca;
        RETURN v_conta;
    END;
END;

DECLARE -- psql
    v_conta INTEGER;
BEGIN
    v_conta := carro_type.contamarca('Marca 1');
    DBMS_OUTPUT.PUb T_LINE('Quantidade de carros da marca 1: ' || v_conta);
END;

-----------------------------------------------

-- Change pessoa type to have carro reference

ALTER TYPE pessoa_type ADD ATRIBUTE carros REF carro_type CASCADE;

UPDATE pessoa_tab p SET carro = (SELECT REF(c) FROM carro_table c WHERE c.proprietario = REF(p));

```

Metodos:

procedure -> não espera nada
function -> espera algo no retorno
