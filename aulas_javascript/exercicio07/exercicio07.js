numeros = [1,2,3,4,5,6,7,8,9,10];

function selecionarNumerosPares(numeros) {
    let pares = numeros.filter(function(numero) {
        return numero % 2 === 0;
    });
    return pares;
}

console.log(selecionarNumerosPares(numeros));

function somatorioNumerosPares(numeros) {
    let somatorio = 0;
    numeros.filter(function(numero) {
        return numero % 2 === 0;
    }).forEach(value => {
        somatorio += value;
    });
    return somatorio;
}

console.log(somatorioNumerosPares(numeros));
 