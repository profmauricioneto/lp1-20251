let tempCelsius = [20, 34.3, 22.1, 33.5, 45, 34, 36, 28];

function converterCelsiusParaFahrenheit(temperaturas) {
    // utilize map para converter o array de celsius para fahrenheit
    // A fórmula para converter de Celsius para Fahrenheit é:
     // Fahrenheit = (Celsius * 9/5) + 32.
    // REQUISITO: uso do map
    let tempFahrenheit = temperaturas.map(function(temp) {
        return (temp * 9/5) + 32;
    });
    return tempFahrenheit;
}

let tempFah = converterCelsiusParaFahrenheit(tempCelsius);
console.log(tempFah);
