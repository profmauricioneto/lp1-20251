function verificarMaior() {
    let valor1 = parseInt(document.getElementById("primeiroValor").value);
    let valor2 = parseInt(document.getElementById("segundoValor").value);
    let elementoResultado = document.getElementById("resultado");
    
    let resultado = "...";
    if (valor1 > valor2) {
        resultado = valor1;
    } else if (valor1 < valor2) {
        resultado = valor2;
    } else {
        alert("Números Iquais");
        resultado = valor1;
    }

    elementoResultado.innerHTML =`O maior valor é: ${resultado}`;
}