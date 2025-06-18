console.log("Hello World from NodeJS");

let frutas = ['banana', 'açaí', 'pitomba', 'siriguela', 'tamarindo'];

frutas.forEach((item) => {
    item = item.concat(' é bom!');
    console.log(item);
})