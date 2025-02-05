// Definição das rotas da API (routes.js)
const express = require('express');
const router = express.Router();
const db = require('./config');

// Rota de teste
router.get('/', (req, res) => {
    res.send('API funcionando!');
});

// Rota para registrar uma venda
router.post('/vendas', (req, res) => {
    const { produto_id, quantidade, total } = req.body;
    const query = 'INSERT INTO vendas (produto_id, quantidade, total) VALUES (?, ?, ?)';

    db.query(query, [produto_id, quantidade, total], (err, result) => {
        if (err) {
            res.status(500).send('Erro ao registrar venda');
        } else {
            res.status(200).send('Venda registrada com sucesso');
        }
    });
});

module.exports = router;
