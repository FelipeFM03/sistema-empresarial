// Controlador de vendas (controllers/vendaController.js)
const db = require('../config');

// Função para registrar uma venda
exports.registrarVenda = (req, res) => {
    const { produto_id, quantidade, total } = req.body;
    const query = 'INSERT INTO vendas (produto_id, quantidade, total) VALUES (?, ?, ?)';

    db.query(query, [produto_id, quantidade, total], (err, result) => {
        if (err) {
            res.status(500).send('Erro ao registrar venda');
        } else {
            res.status(200).send('Venda registrada com sucesso');
        }
    });
};
