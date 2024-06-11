const sqlite3 = require('sqlite3').verbose();

// Abre uma conexão com o banco de dados (se não existir, será criado)
let db = new sqlite3.Database('produtos.db');

// Cria tabela produto_unidade
db.run(`
  CREATE TABLE produto_unidade (
      id integer NOT NULL CONSTRAINT produto_unidade_pk PRIMARY KEY,
      sigla text NOT NULL,
      descricao text NOT NULL
  );`, (err) => {
  if (err) {
      return console.error(err.message);
  }
  console.log('Tabela produto_unidade criada com sucesso!');
});

// Cria tabela produto_marca
db.run(`
  CREATE TABLE produto_marca (
      id integer NOT NULL CONSTRAINT produto_marca_pk PRIMARY KEY,
      nome text NOT NULL,
      descricao text NOT NULL
  );`, (err) => {
  if (err) {
      return console.error(err.message);
  }
  console.log('Tabela produto_marca criada com sucesso!');
});

// Cria tabela produto_grupo
db.run(`
  CREATE TABLE produto_grupo (
      id integer NOT NULL CONSTRAINT produto_grupo_pk PRIMARY KEY,
      nome text NOT NULL,
      descricao text NOT NULL
  );`, (err) => {
  if (err) {
      return console.error(err.message);
  }
  console.log('Tabela produto_grupo criada com sucesso!');
});

// Cria tabela produto_subgrupo
db.run(`
  CREATE TABLE produto_subgrupo (
      id integer NOT NULL CONSTRAINT produto_subgrupo_pk PRIMARY KEY,
      id_produto_grupo integer NOT NULL,
      nome text NOT NULL,
      descricao text NOT NULL,
      CONSTRAINT produto_subgrupo_produto_grupo FOREIGN KEY (id_produto_grupo)
      REFERENCES produto_grupo (id)
  );`, (err) => {
  if (err) {
      return console.error(err.message);
  }
  console.log('Tabela produto_subgrupo criada com sucesso!');
});

// Cria tabela produto
db.run(`
  CREATE TABLE produto (
      id integer NOT NULL CONSTRAINT produto_pk PRIMARY KEY,
      id_produto_subgrupo integer NOT NULL,
      id_produto_marca integer NOT NULL,
      id_produto_unidade integer NOT NULL,
      nome text NOT NULL,
      gtlin text NOT NULL,
      valor real NOT NULL,
      data_cadastro date NOT NULL,
      CONSTRAINT produto_produto_marca FOREIGN KEY (id_produto_marca)
      REFERENCES produto_marca (id),
      CONSTRAINT produto_produto_unidade FOREIGN KEY (id_produto_unidade)
      REFERENCES produto_unidade (id),
      CONSTRAINT produto_produto_subgrupo FOREIGN KEY (id_produto_subgrupo)
      REFERENCES produto_subgrupo (id)
  );`, (err) => {
  if (err) {
      return console.error(err.message);
  }
  console.log('Tabela produto criada com sucesso!');
});

// Fecha a conexão com o banco de dados
db.close((err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Conexão com o banco de dados fechada.');
});
