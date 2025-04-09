var nota = 10;
console.log(typeof nota);
nota = "10";
console.log(typeof nota);
nota = true;
console.log(typeof nota);
console.log(typeof null);
console.log(typeof undefined);
var media;
console.log(typeof media);

let x = 10;
x = 12;

{
    let num = 5;
    console.log(num);
}
let i;
for(i = 0; i < 10; i++) {
    console.log(i);
}
console.log("valor de i = " + i);

let valor = "1234";
console.log(typeof valor);
valor = parseInt(valor);
console.log(valor);
console.log(typeof valor);
valor = parseFloat((valor/13));
console.log(valor);
console.log(typeof valor);
console.log(valor.toFixed(2));