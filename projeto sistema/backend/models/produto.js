const db = require('../config');

const Produto = {
    listarTodos: (callback) => {
        const query = 'SELECT * FROM produtos';
        db.query(query, callback);
    }
};

module.exports = Produto;
