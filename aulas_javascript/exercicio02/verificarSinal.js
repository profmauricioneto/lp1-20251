const prompt = require("prompt-sync")();

let valor = parseInt(prompt('Digite um valor: '));

let resultado = (valor > 0) ? `${valor}: sinal +` : `${valor}: sinal -`;

console.log(resultado);
