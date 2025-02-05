// Configuração inicial do servidor Node.js com Express
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Configuração do banco de dados
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sistema_vendas'
});

db.connect(err => {
    if (err) {
        console.error('Erro ao conectar no banco de dados:', err);
    } else {
        console.log('Banco de dados conectado!');
    }
});

// Endpoint para registrar uma venda
app.post('/venda', (req, res) => {
    const { produtos, total, metodo_pagamento } = req.body;
    const sql = 'INSERT INTO vendas (produtos, total, metodo_pagamento) VALUES (?, ?, ?)';
    db.query(sql, [JSON.stringify(produtos), total, metodo_pagamento], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Erro ao registrar venda' });
        }
        res.json({ message: 'Venda registrada com sucesso!', venda_id: result.insertId });
    });
});

// Servidor rodando na porta 3000
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});