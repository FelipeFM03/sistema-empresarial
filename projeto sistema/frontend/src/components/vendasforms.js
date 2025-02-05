import { registrarVenda } from '../services/api.js';

export default function VendaForm() {
    return `
        <form id="venda-form">
            <input type="text" id="produto-id" placeholder="ID do Produto" required>
            <input type="number" id="quantidade" placeholder="Quantidade" required>
            <button type="submit">Registrar Venda</button>
        </form>
    `;
}
