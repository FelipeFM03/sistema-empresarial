const express = require('express');
const cors = require('cors');
const vendaRoutes = require('./routes/vendaRoutes');
const produtoRoutes = require('./routes/produtoRoutes');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api', vendaRoutes);
app.use('/api', produtoRoutes);

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
