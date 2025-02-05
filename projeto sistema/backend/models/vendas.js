const db = require('../config');

const Venda = {
    criar: (produto_id, quantidade, total, callback) => {
        const query = 'INSERT INTO vendas (produto_id, quantidade, total) VALUES (?, ?, ?)';
        db.query(query, [produto_id, quantidade, total], callback);
    }
};

module.exports = Venda;
