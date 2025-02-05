const API_URL = 'http://localhost:3000/api';

export async function buscarProdutos() {
    const resposta = await fetch(`${API_URL}/produtos`);
    return resposta.json();
}

export async function registrarVenda(produto_id, quantidade) {
    const resposta = await fetch(`${API_URL}/vendas`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ produto_id, quantidade })
    });
    return resposta.json();
}
