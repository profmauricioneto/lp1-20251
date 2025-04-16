let notas = [6.7, 6.3, 2.3, 9.6, 10, 3.6, 5.5, 7];
let media = 0;

notas.forEach(function(current) {
    media += current;
    console.log(current);
});

console.log("Media das Notas = " + media/notas.length)