import { buscarProdutos } from '../services/api.js';

export default async function ProdutoLista() {
    const produtos = await buscarProdutos();
    return `
        <section>
            <h2>Lista de Produtos</h2>
            <ul>
                ${produtos.map(prod => `<li>${prod.nome} - R$ ${prod.preco}</li>`).join('')}
            </ul>
        </section>
    `;
}
