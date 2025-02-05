const Produto = require('../models/Produto');

exports.listarProdutos = (req, res) => {
    Produto.listarTodos((err, resultados) => {
        if (err) {
            res.status(500).send('Erro ao buscar produtos');
        } else {
            res.json(resultados);
        }
    });
};
