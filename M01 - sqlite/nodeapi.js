const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors'); 

const app = express();
const PORT = process.env.PORT || 3000;

// Conexão com o banco de dados SQLite
const db = new sqlite3.Database('produtos.db');

// Middleware para analisar solicitações JSON
app.use(express.json());
app.use(cors()); 


// -=-=-=-=-=-=-=-=-=-=-=-=- CRUD PRODUTO -=-=-=-=-=-=-=-=-=-=-=-=-

// Rota para obter todos os produtos
app.get('/produto', (req, res) => {
    db.all('SELECT * FROM produto', (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

// Rota para obter um único produto por ID
app.get('/produto/:id', (req, res) => {
  const productId = req.params.id;
  const sql = 'SELECT * FROM produto WHERE id = ?';

  db.get(sql, productId, (err, row) => {
      if (err) {
          res.status(500).json({ error: err.message });
          return;
      }
      if (!row) {
          res.status(404).json({ message: 'Produto não encontrado' });
          return;
      }
      res.json(row);
  });
});

// Rota para criar um novo produto
app.post('/produto', (req, res) => {
    const { id_produto_subgrupo, id_produto_marca, id_produto_unidade, nome, gtlin, valor, data_cadastro } = req.body;
    const sql = 'INSERT INTO produto (id_produto_subgrupo, id_produto_marca, id_produto_unidade, nome, gtlin, valor, data_cadastro) VALUES (?, ?, ?, ?, ?, ?, ?)';
    const params = [id_produto_subgrupo, id_produto_marca, id_produto_unidade, nome, gtlin, valor, data_cadastro];

    db.run(sql, params, function(err) {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({
            message: 'Produto criado com sucesso',
            id: this.lastID
        });
    });
});

// Rota para atualizar um produto existente
app.put('/produto/:id', (req, res) => {
  const productId = req.params.id;
  const { id_produto_subgrupo, id_produto_marca, id_produto_unidade, nome, gtln, valor, data_cadastro } = req.body;
  const sql = `UPDATE produto SET
                  id_produto_subgrupo = ?,
                  id_produto_marca = ?,
                  id_produto_unidade = ?,
                  nome = ?,
                  gtln = ?,
                  valor = ?,
                  data_cadastro = ?
              WHERE id = ?`;
  const params = [id_produto_subgrupo, id_produto_marca, id_produto_unidade, nome, gtln, valor, data_cadastro, productId];

  db.run(sql, params, function(err) {
      if (err) {
          res.status(500).json({ error: err.message });
          return;
      }
      res.json({
          message: 'Produto atualizado com sucesso',
          changes: this.changes
      });
  });
});

// Rota para excluir um produto
app.delete('/produto/:id', (req, res) => {
  const productId = req.params.id;
  const sql = 'DELETE FROM produto WHERE id = ?';

  db.run(sql, productId, function(err) {
      if (err) {
          res.status(500).json({ error: err.message });
          return;
      }
      res.json({
          message: 'Produto excluído com sucesso',
          changes: this.changes
      });
  });
});

// -=-=-=-=-=-=-=-=-=-=-=-=- CRUD PRODUTO -=-=-=-=-=-=-=-=-=-=-=-=-


// -=-=-=-=-=-=-=-=-=-=-=-=- CRUD GRUPO DE PRODUTO -=-=-=-=-=-=-=-=-=-=-=-=-

// Rota para obter todos os grupos de produtos
app.get('/produto_grupo', (req, res) => {
  db.all('SELECT * FROM produto_grupo', (err, rows) => {
      if (err) {
          res.status(500).json({ error: err.message });
          return;
      }
      res.json(rows);
  });
});

// Rota para obter um único grupo de produto por ID
app.get('/produto_grupo/:id', (req, res) => {
  const groupId = req.params.id;
  const sql = 'SELECT * FROM produto_grupo WHERE id = ?';

  db.get(sql, groupId, (err, row) => {
      if (err) {
          res.status(500).json({ error: err.message });
          return;
      }
      if (!row) {
          res.status(404).json({ message: 'Grupo de produto não encontrado' });
          return;
      }
      res.json(row);
  });
});

// Rota para criar um novo grupo de produto
app.post('/produto_grupo', (req, res) => {
  const { nome, descricao } = req.body;
  const sql = 'INSERT INTO produto_grupo (nome, descricao) VALUES (?, ?)';
  const params = [nome, descricao];

  db.run(sql, params, function(err) {
      if (err) {
          res.status(500).json({ error: err.message });
          return;
      }
      res.json({
          message: 'Grupo de produto criado com sucesso',
          id: this.lastID
      });
  });
});

// Rota para atualizar um grupo de produto existente
app.put('/produto_grupo/:id', (req, res) => {
  const groupId = req.params.id;
  const { nome, descricao } = req.body;
  const sql = 'UPDATE produto_grupo SET nome = ?, descricao = ? WHERE id = ?';
  const params = [nome, descricao, groupId];

  db.run(sql, params, function(err) {
      if (err) {
          res.status(500).json({ error: err.message });
          return;
      }
      res.json({
          message: 'Grupo de produto atualizado com sucesso',
          changes: this.changes
      });
  });
});

// Rota para excluir um grupo de produto
app.delete('/produto_grupo/:id', (req, res) => {
  const groupId = req.params.id;
  const sql = 'DELETE FROM produto_grupo WHERE id = ?';

  db.run(sql, groupId, function(err) {
      if (err) {
          res.status(500).json({ error: err.message });
          return;
      }
      res.json({
          message: 'Grupo de produto excluído com sucesso',
          changes: this.changes
      });
  });
});

// -=-=-=-=-=-=-=-=-=-=-=-=- CRUD GRUPO DE PRODUTO -=-=-=-=-=-=-=-=-=-=-=-=-


// -=-=-=-=-=-=-=-=-=-=-=-=- CRUD MARCA DE PRODUTO -=-=-=-=-=-=-=-=-=-=-=-=-

// Rota para obter todas as marcas de produtos
app.get('/produto_marca', (req, res) => {
  db.all('SELECT * FROM produto_marca', (err, rows) => {
      if (err) {
          res.status(500).json({ error: err.message });
          return;
      }
      res.json(rows);
  });
});

// Rota para obter uma única marca de produto por ID
app.get('/produto_marca/:id', (req, res) => {
  const groupId = req.params.id;
  const sql = 'SELECT * FROM produto_marca WHERE id = ?';

  db.get(sql, groupId, (err, row) => {
      if (err) {
          res.status(500).json({ error: err.message });
          return;
      }
      if (!row) {
          res.status(404).json({ message: 'Marca de produto não encontrada' });
          return;
      }
      res.json(row);
  });
});

// Rota para criar uma nova marca de produto
app.post('/produto_marca', (req, res) => {
  const { nome, descricao } = req.body;
  const sql = 'INSERT INTO produto_marca (nome, descricao) VALUES (?, ?)';
  const params = [nome, descricao];

  db.run(sql, params, function(err) {
      if (err) {
          res.status(500).json({ error: err.message });
          return;
      }
      res.json({
          message: 'Marca de produto criada com sucesso',
          id: this.lastID
      });
  });
});

// Rota para atualizar uma marca de produto existente
app.put('/produto_marca/:id', (req, res) => {
  const groupId = req.params.id;
  const { nome, descricao } = req.body;
  const sql = 'UPDATE produto_marca SET nome = ?, descricao = ? WHERE id = ?';
  const params = [nome, descricao, groupId];

  db.run(sql, params, function(err) {
      if (err) {
          res.status(500).json({ error: err.message });
          return;
      }
      res.json({
          message: 'Marca de produto atualizada com sucesso',
          changes: this.changes
      });
  });
});

// Rota para excluir uma marca de produto
app.delete('/produto_marca/:id', (req, res) => {
  const groupId = req.params.id;
  const sql = 'DELETE FROM produto_marca WHERE id = ?';

  db.run(sql, groupId, function(err) {
      if (err) {
          res.status(500).json({ error: err.message });
          return;
      }
      res.json({
          message: 'Marca de produto excluída com sucesso',
          changes: this.changes
      });
  });
});

// -=-=-=-=-=-=-=-=-=-=-=-=- CRUD MARCA DE PRODUTO -=-=-=-=-=-=-=-=-=-=-=-=-


// -=-=-=-=-=-=-=-=-=-=-=-=- CRUD UNIDADE DE PRODUTO -=-=-=-=-=-=-=-=-=-=-=-=-

// Rota para obter todas as unidades de produtos
app.get('/produto_unidade', (req, res) => {
  db.all('SELECT * FROM produto_unidade', (err, rows) => {
      if (err) {
          res.status(500).json({ error: err.message });
          return;
      }
      res.json(rows);
  });
});

// Rota para obter uma única unidade de produto por ID
app.get('/produto_unidade/:id', (req, res) => {
  const groupId = req.params.id;
  const sql = 'SELECT * FROM produto_unidade WHERE id = ?';

  db.get(sql, groupId, (err, row) => {
      if (err) {
          res.status(500).json({ error: err.message });
          return;
      }
      if (!row) {
          res.status(404).json({ message: 'Unidade de produto não encontrada' });
          return;
      }
      res.json(row);
  });
});

// Rota para criar uma nova unidade de produto
app.post('/produto_unidade', (req, res) => {
  const { sigla, descricao } = req.body;
  const sql = 'INSERT INTO produto_unidade (sigla, descricao) VALUES (?, ?)';
  const params = [sigla, descricao];

  db.run(sql, params, function(err) {
      if (err) {
          res.status(500).json({ error: err.message });
          return;
      }
      res.json({
          message: 'Unidade de produto criada com sucesso',
          id: this.lastID
      });
  });
});

// Rota para atualizar uma unidade de produto existente
app.put('/produto_unidade/:id', (req, res) => {
  const groupId = req.params.id;
  const { sigla, descricao } = req.body;
  const sql = 'UPDATE produto_unidade SET sigla = ?, descricao = ? WHERE id = ?';
  const params = [sigla, descricao, groupId];

  db.run(sql, params, function(err) {
      if (err) {
          res.status(500).json({ error: err.message });
          return;
      }
      res.json({
          message: 'Unidade de produto atualizada com sucesso',
          changes: this.changes
      });
  });
});

// Rota para excluir uma unidade de produto
app.delete('/produto_unidade/:id', (req, res) => {
  const groupId = req.params.id;
  const sql = 'DELETE FROM produto_unidade WHERE id = ?';

  db.run(sql, groupId, function(err) {
      if (err) {
          res.status(500).json({ error: err.message });
          return;
      }
      res.json({
          message: 'Unidade de produto excluída com sucesso',
          changes: this.changes
      });
  });
});

// -=-=-=-=-=-=-=-=-=-=-=-=- CRUD UNIDADE DE PRODUTO -=-=-=-=-=-=-=-=-=-=-=-=-


// -=-=-=-=-=-=-=-=-=-=-=-=- CRUD SUBGRUPO DE PRODUTO -=-=-=-=-=-=-=-=-=-=-=-=-

// Rota para obter todos os subgrupos de produtos
app.get('/produto_subgrupo', (req, res) => {
  db.all('SELECT * FROM produto_subgrupo', (err, rows) => {
      if (err) {
          res.status(500).json({ error: err.message });
          return;
      }
      res.json(rows);
  });
});

// Rota para obter um único subgrupo de produto por ID
app.get('/produto_subgrupo/:id', (req, res) => {
  const subgroupId = req.params.id;
  const sql = 'SELECT * FROM produto_subgrupo WHERE id = ?';

  db.get(sql, subgroupId, (err, row) => {
      if (err) {
          res.status(500).json({ error: err.message });
          return;
      }
      if (!row) {
          res.status(404).json({ message: 'Subgrupo de produto não encontrado' });
          return;
      }
      res.json(row);
  });
});

// Rota para criar um novo subgrupo de produto
app.post('/produto_subgrupo', (req, res) => {
  const { id_produto_grupo, nome, descricao } = req.body;
  const sql = 'INSERT INTO produto_subgrupo (id_produto_grupo, nome, descricao) VALUES (?, ?, ?)';
  const params = [id_produto_grupo, nome, descricao];

  db.run(sql, params, function(err) {
      if (err) {
          res.status(500).json({ error: err.message });
          return;
      }
      res.json({
          message: 'Subgrupo de produto criado com sucesso',
          id: this.lastID
      });
  });
});

// Rota para atualizar um subgrupo de produto existente
app.put('/produto_subgrupo/:id', (req, res) => {
  const subgroupId = req.params.id;
  const { id_produto_grupo, nome, descricao } = req.body;
  const sql = 'UPDATE produto_subgrupo SET id_produto_grupo = ?, nome = ?, descricao = ? WHERE id = ?';
  const params = [id_produto_grupo, nome, descricao, subgroupId];

  db.run(sql, params, function(err) {
      if (err) {
          res.status(500).json({ error: err.message });
          return;
      }
      res.json({
          message: 'Subgrupo de produto atualizado com sucesso',
          changes: this.changes
      });
  });
});

// Rota para excluir um subgrupo de produto
app.delete('/produto_subgrupo/:id', (req, res) => {
  const subgroupId = req.params.id;
  const sql = 'DELETE FROM produto_subgrupo WHERE id = ?';

  db.run(sql, subgroupId, function(err) {
      if (err) {
          res.status(500).json({ error: err.message });
          return;
      }
      res.json({
          message: 'Subgrupo de produto excluído com sucesso',
          changes: this.changes
      });
  });
});

// -=-=-=-=-=-=-=-=-=-=-=-=- CRUD SUBGRUPO DE PRODUTO -=-=-=-=-=-=-=-=-=-=-=-=-


// -=-=-=-=-=-=-=-=-=-=-=-=- CONSULTA PERSONALIZADA -=-=-=-=-=-=-=-=-=-=-=-=-

app.get('/produto_geral', (req, res) => {
  let sql = `
    SELECT 
    p.id AS produto_id,
    p.nome AS produto_nome,
    p.valor AS produto_valor,
    p.gtlin AS produto_gtlin,
    p.data_cadastro AS produto_data_cadastro,
    m.id AS marca_id,
    m.nome AS marca_nome,
    m.descricao AS marca_descricao,
    g.id AS grupo_id,
    g.nome AS grupo_nome,
    g.descricao AS grupo_descricao,
    sg.id AS subgrupo_id,
    sg.nome AS subgrupo_nome,
    sg.descricao AS subgrupo_descricao,
    u.id AS unidade_id,
    u.sigla AS unidade_sigla,
    u.descricao AS unidade_descricao
    FROM produto p
    JOIN produto_marca m ON p.id_produto_marca = m.id
    JOIN produto_subgrupo sg ON p.id_produto_subgrupo = sg.id
    JOIN produto_grupo g ON sg.id_produto_grupo = g.id
    JOIN produto_unidade u ON p.id_produto_unidade = u.id`;
  db.all(sql, (err, rows) => {
      if (err) {
          res.status(500).json({ error: err.message });
          return;
      }
      res.json(rows);
  });
});

app.get('/produto_geral/:id', (req, res) => {
  const produtoGeralId = req.params.id;
  let sql = `
    SELECT 
    p.id AS produto_id,
    p.nome AS produto_nome,
    p.valor AS produto_valor,
    p.gtlin AS produto_gtlin,
    p.data_cadastro AS produto_data_cadastro,
    m.id AS marca_id,
    m.nome AS marca_nome,
    m.descricao AS marca_descricao,
    g.id AS grupo_id,
    g.nome AS grupo_nome,
    g.descricao AS grupo_descricao,
    sg.id AS subgrupo_id,
    sg.nome AS subgrupo_nome,
    sg.descricao AS subgrupo_descricao,
    u.id AS unidade_id,
    u.sigla AS unidade_sigla,
    u.descricao AS unidade_descricao
    FROM produto p
    JOIN produto_marca m ON p.id_produto_marca = m.id
    JOIN produto_subgrupo sg ON p.id_produto_subgrupo = sg.id
    JOIN produto_grupo g ON sg.id_produto_grupo = g.id
    JOIN produto_unidade u ON p.id_produto_unidade = u.id
    WHERE p.id = ?`;

  db.get(sql, produtoGeralId, (err, row) => {
      if (err) {
          res.status(500).json({ error: err.message });
          return;
      }
      if (!row) {
          res.status(404).json({ message: 'Subgrupo de produto não encontrado' });
          return;
      }
      res.json(row);
  });
});

db.run("PRAGMA foreign_keys = ON;", function(err) {
  if (err) {
      console.error("Erro ao ativar a verificação de chaves estrangeiras:", err.message);
  } else {
      console.log("Verificação de chaves estrangeiras ativada com sucesso.");
  }
});

// Inicie o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
