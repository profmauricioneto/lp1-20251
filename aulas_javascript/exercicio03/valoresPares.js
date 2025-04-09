const prompt = require("prompt-sync")();

let inicio = parseInt(prompt('valor inicial: '));
let fim = parseInt(prompt('valor final: '));

function verificarPares(inicio, fim) {
    for (let i = inicio; i <= fim; i++) {
        if (i % 2 === 0) {
            console.log(`${i} é par`);
        }
    }
}

verificarPares(inicio, fim);