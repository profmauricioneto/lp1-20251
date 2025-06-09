let produtos = [];

function adicionarProdutosAoCarrinho() {
    const qtdProduto = document.querySelector('#quantidade').value;
    const nomeProduto = document.querySelector('#nome-produto').value;
    const precoProduto = document.querySelector('#preco').value;

    produtos.push({
        nome: nomeProduto,
        quantidade: qtdProduto,
        preco: precoProduto
    });

    // atualizando a tabela
    const tabela = document.querySelector('#tabela-corpo');
    tabela.innerHTML = '';
    produtos.forEach((item) => {
        line = document.createElement('tr');
        line.innerHTML = `
            <td>${item.nome}</td>
            <td>${item.quantidade}</td>
            <td>${item.preco * item.quantidade}</td>
        `;
    tabela.appendChild(line);
    });

    let total = 0;
    total = produtos.reduce((acc, item) => {
        return acc + (item.preco * item.quantidade)
    }, 0);

    document.querySelector('#total').textContent = `R$ ${total}`;
}

const btnEnviar = document.querySelector('#btnEnviar');
btnEnviar.addEventListener('click', adicionarProdutosAoCarrinho);