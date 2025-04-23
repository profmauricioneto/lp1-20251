let valores = [11,121,332,334,35,632,73,8];

function encontrarMaiorValor(valoresArray) {
    return valoresArray.reduce(function(acumular, atual) {
        return acumular > atual ? acumular : atual;
    });
}

let maior = encontrarMaiorValor(valores);
console.log(maior);

let maiorValorAlterado = valores.map((valor) => {
    return valor * 11;
}).reduce((acumular, atual) => {
    return acumular > atual ? acumular : atual;
});

console.log(maiorValorAlterado);
