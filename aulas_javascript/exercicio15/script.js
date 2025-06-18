const btnBom = document.querySelector('.bom');
const btnRuim = document.querySelector('.ruim');
const btnMelhorar = document.querySelector('.melhorar');

const columnGood = document.querySelector('#column-good');
const columnBad = document.querySelector('#column-bad');
const columnBetter = document.querySelector('#column-better');

btnBom.addEventListener('click', () => {
    let message = prompt('Digite o conteúdo do card!');
    if (!message) {
        alert('Escreve alguma coisa desgraça!')
        return
    } 
    let color = prompt('Escolha a cor');

    let divMessage = document.createElement('div');
    divMessage.classList.add('card');
    divMessage.style.backgroundColor = color;

    divMessage.textContent = message;

    columnGood.appendChild(divMessage);
});

btnRuim.addEventListener('click', () => {
    let message = prompt('Digite o conteúdo do card!');

    let divMessage = document.createElement('div');
    divMessage.classList.add('card');

    divMessage.textContent = message;

    columnBad.appendChild(divMessage);
});

btnMelhorar.addEventListener('click', () => {
    let message = prompt('Digite o conteúdo do card!');

    let divMessage = document.createElement('div');
    divMessage.classList.add('card');

    divMessage.textContent = message;

    columnBetter.appendChild(divMessage);
});