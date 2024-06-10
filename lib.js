const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

try {
    dados = require('./dados.json');
} catch (err) {
    console.error('Erro ao ler o arquivo de produtos:', err);
}

app.get('/', (req, res) => {
    res.send('Olá.');
});

app.get('/produtos', (req, res) => {
    res.send(dados.produto);
});

app.get('/produtos/:id', (req, res) => {
    const idProduto = parseInt(req.params.id);
    const produto = dados.produto.find(produto => produto.id === idProduto); 
    if (produto) { 
        res.status(200).json(produto); 
        const dadoNovo = JSON.stringify(dados, null, 2);
        fs.writeFileSync('./dados.json', dadoNovo);
    } else { 
        res.status(404).send('Produto não encontrado.'); 
    } 
});

app.post('/produtos', (req, res) => { 
    const produtoNovo = req.body; 
    if (produtoNovo) {
        const ultimoIndice = dados.produto.length; 
        produtoNovo.id = (ultimoIndice === 0) ? 1 : dados.produto[ultimoIndice-1].id + 1; 
        dados.produto.push(produtoNovo); 
        res.status(201).json(produtoNovo);
        const dadoNovo = JSON.stringify(dados, null, 2);
        fs.writeFileSync('./dados.json', dadoNovo);
    } else {
        res.status(400).send('Requisição sem corpo.');
    }
}); 

app.put('/produtos/:id', (req, res) => { 
    const idProduto = parseInt(req.params.id);
    const produtoAtualizado = req.body; 
    const indice = dados.produto.findIndex(produto => produto.id === idProduto); 
    if (indice !== -1) { 
        dados.produto[indice] = { ...dados.produto[indice], ...produtoAtualizado };
        res.status(201).json(dados.produto[indice]); 
        const dadoNovo = JSON.stringify(dados, null, 2);
        fs.writeFileSync('./dados.json', dadoNovo);
    } else { 
        res.status(404).send('Produto não encontrado.'); 
    } 
}); 

app.delete('/produtos/:id', (req, res) => {
    const idProduto = parseInt(req.params.id);
    const indice = dados.produto.findIndex(produto => produto.id === idProduto); 
    if (indice !== -1) { 
        dados.produto.splice(indice, 1);
        res.status(200).send();
        const dadoNovo = JSON.stringify(dados, null, 2);
        fs.writeFileSync('./dados.json', dadoNovo);
    } else { 
        res.status(404).send('Produto não encontrado.'); 
    } 
});

app.listen(PORT, () => {
    console.log(`Rodando na porta ${PORT}`);
})