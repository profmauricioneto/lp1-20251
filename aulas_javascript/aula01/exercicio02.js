const prompt = require('prompt-sync')();

let value = parseInt(prompt('Digite um valor numérico: '));

if (value % 2 === 0) {
    console.log(`${value} é par`);
} else {
    console.log(`${value} é ímpar`);
}

// let valores = [1,2,3,4,5,6,7,8,9];

// for(let i = 0; i < valores.length; i++) {
//     if (valores[i] % 2 === 0) {
//         console.log(`${valores[i]} é par`);
//     } else {
//         console.log(`${valores[i]} é ímpar`);
//     }
// }