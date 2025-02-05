// Configuração do banco de dados (config.js)
const mysql = require('mysql2');

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

module.exports = db;
