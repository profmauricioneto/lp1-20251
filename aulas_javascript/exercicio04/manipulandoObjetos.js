const prompt = require('prompt-sync')();

let pessoa = {};
pessoa.nome = prompt('Digite seu nome: ');
pessoa.idade = parseInt(prompt('Digite sua idade: '));
pessoa.profissao = prompt('Digite sua profissão: ');

console.log(pessoa);
let message = `Olá, meu nome é ${pessoa.nome}, tenho ${pessoa.idade} anos e sou ${pessoa.profissao}.`
console.log(message);
