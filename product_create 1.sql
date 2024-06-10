-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2024-06-10 14:01:05.823
-- tables
-- Table: produto
CREATE TABLE produto (
    id integer NOT NULL CONSTRAINT produto_pk PRIMARY KEY,
    id_produto_subgrupo integer NOT NULL,
    id_produto_marca integer NOT NULL,
    id_produto_unidade integer NOT NULL,
    nome text NOT NULL,
    gtln text NOT NULL,
    valor real NOT NULL,
    data_cadastro date NOT NULL,
    CONSTRAINT produto_produto_marca FOREIGN KEY (id_produto_marca)
    REFERENCES produto_marca (id),
    CONSTRAINT produto_produto_unidade FOREIGN KEY (id_produto_unidade)
    REFERENCES produto_unidade (id),
    CONSTRAINT produto_produto_subgrupo FOREIGN KEY (id_produto_subgrupo)
    REFERENCES produto_subgrupo (id)
);

-- Table: produto_grupo
CREATE TABLE produto_grupo (
    id integer NOT NULL CONSTRAINT produto_grupo_pk PRIMARY KEY,
    nome text NOT NULL,
    descricao text NOT NULL
);

-- Table: produto_marca
CREATE TABLE produto_marca (
    id integer NOT NULL CONSTRAINT produto_marca_pk PRIMARY KEY,
    nome text NOT NULL,
    descricao text NOT NULL
);

-- Table: produto_subgrupo
CREATE TABLE produto_subgrupo (
    id integer NOT NULL CONSTRAINT produto_subgrupo_pk PRIMARY KEY,
    id_produto_grupo integer NOT NULL,
    nome text NOT NULL,
    descricao text NOT NULL,
    CONSTRAINT produto_subgrupo_produto_grupo FOREIGN KEY (id_produto_grupo)
    REFERENCES produto_grupo (id)
);

-- Table: produto_unidade
CREATE TABLE produto_unidade (
    id integer NOT NULL CONSTRAINT produto_unidade_pk PRIMARY KEY,
    sigla text NOT NULL,
    descricao text NOT NULL
);

-- End of file.
