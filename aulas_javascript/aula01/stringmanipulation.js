let nome = 'mauricio';
let idade = 35;

let message = `Olá Sr(a). 
${nome} sua idade é ${idade}, 
logo você nasceu em ${new Date().getFullYear() - idade}`;

console.log(message);