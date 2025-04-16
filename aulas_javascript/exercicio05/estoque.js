const prompt = require('prompt-sync')();

let estoque = [];

function addProduto() {
    let produto = {};
    produto.nome = prompt('Nome do Produto: ').toLowerCase();
    produto.preco = parseFloat(prompt('Preço do Produto: '));
    produto.quantidade = parseInt(prompt('Quantidade do Produto: '));
    estoque.push(produto);
}

function verificarEstoque(nomeProduto) {
    let naoEncontrou = true;
    for(let i = 0; i < estoque.length; i++) {
        if(estoque[i].nome === nomeProduto.toLowerCase()) {
            naoEncontrou = false;
            console.log('Produto Encontrado!');
            console.log(`Quantidade em Estoque: ${estoque[i].quantidade}`);
        }   
    }

    if (naoEncontrou) {
        console.log('Produto não encontrado!');
    }
}

function main() {
    for (let i = 0; i < 3; i++) {
        addProduto()
    };

    let nomeProduto = prompt('Digite um produto a ser encontrado: ');
    verificarEstoque(nomeProduto);
}

main();