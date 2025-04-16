let idades = [11, 44, 23, 14, 16, 60, 45, 36];

let adultos = idades.filter(function(idade) {
    return idade >= 18;
});
// saida
console.log('tamanho do array: ' + adultos.length);
console.log(adultos);
