import Header from './components/Header.js';
import ProdutoLista from './components/ProdutoLista.js';
import VendaForm from './components/VendaForm.js';

async function render() {
    document.getElementById('app').innerHTML = `
        ${Header()}
        ${await ProdutoLista()}
        ${VendaForm()}
    `;

    document.getElementById('venda-form').addEventListener('submit', async (event) => {
        event.preventDefault();
        const produto_id = document.getElementById('produto-id').value;
        const quantidade = document.getElementById('quantidade').value;
        await registrarVenda(produto_id, quantidade);
        render(); // Atualiza a lista após a venda
    });
}

render();
